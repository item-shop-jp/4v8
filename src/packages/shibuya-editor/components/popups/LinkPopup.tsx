import * as React from 'react';
import ReactDOM from 'react-dom';
import { Subscription } from 'rxjs';
import styled from 'styled-components';
import { EditorEvents, KeyCodes } from '../../constants';
import { CaretPosition } from '../../types/caret';
import { EditorController } from '../../types/editor';
import { Inline, InlineAttributes } from '../../types/inline';
import { getHtmlElement } from '../../utils/dom';
import { TOOLBAR_CHILD_WIDTH } from '../toolbar';

export interface LinkPopupProps {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

interface PopupPosition {
  top: number;
  left: number;
}

interface LinkPopupType extends PopupPosition {
  position: 'absolute' | 'relative';
}

interface Props {
  editor: EditorController;
  style?: React.ComponentProps<'div'>['style'];
  scrollContainer?: HTMLElement | string;
}

const LinkPopupContainer = styled.div<LinkPopupType>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: ${(props) => props.position ?? 'absolute'};
  top: ${(props) => props.top ?? 0}px;
  left: ${(props) => props.left ?? 0}px;
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  z-index: 1;
`;

const EnterLinkContainer = styled.input<{ position: 'absolute' | 'relative' }>`
  position: ${(props) => props.position ?? 'absolute'};
  background-color: #18181b;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px #ddd;
  color: #a1a1aa;
  padding: 5px 12px;
  white-space: nowrap;
  display: flex;
  width: 176px;
  height: 24px;
  font-size: 14px;
`;

const DeleteButton = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const LinkPopup = React.memo(({ editor, scrollContainer, ...props }: Props) => {
  const [formats, setFormats] = React.useState<InlineAttributes>({});
  const [linkUrl, setLinkUrl] = React.useState('');
  const [inline, setInline] = React.useState<Inline>();
  const [popupMode, setPopupMode] = React.useState();
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [popupPosition, setPopupPosition] = React.useState<PopupPosition>();
  const [currentCaretPosition, setCurrentCaretPosition] = React.useState<CaretPosition | null>();
  const modalRef = React.useRef<HTMLDivElement>(null);
  const linkUrlRef = React.useRef<string>();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLinkUrl(event.target.value);
    },
    [linkUrl],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === KeyCodes.ENTER) {
        handleSave();
      }
    },
    [linkUrl, currentCaretPosition],
  );

  const updateEditor = React.useCallback(
    (callback: () => void) => {
      editor.getModule('toolbar').setUpdating(true);
      callback();
      setTimeout(() => editor.getModule('toolbar').setUpdating(false), 100);
      setPopupOpen(false);
    },
    [editor],
  );

  const handleDelete = React.useCallback(() => {
    updateEditor(() => {
      editor.getModule('toolbar').formatInline({ link: '' }, currentCaretPosition);
    });
  }, [updateEditor, currentCaretPosition]);

  const handleSave = React.useCallback(() => {
    updateEditor(() => {
      editor.getModule('toolbar').formatInline({ link: linkUrl }, currentCaretPosition);
    });
  }, [updateEditor, linkUrl, currentCaretPosition]);

  const handleClick = React.useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  }, []);

  React.useEffect(() => {
    const subs = new Subscription();
    const eventEmitter = editor.getEventEmitter();
    subs.add(
      eventEmitter.select(EditorEvents.EVENT_LINK_CLICK).subscribe((v) => {
        linkUrlRef.current = v.link;
        if (v.mode) {
          setPopupMode(v.mode);
        }
        if (v.link) {
          setLinkUrl(v.link);
        } else {
          setLinkUrl('');
        }
        if (v.inline) {
          setInline(v.inline);
        }
        const container = getHtmlElement(scrollContainer);
        const caret = editor.getCaretPosition();
        setPopupOpen(true);
        if (!caret) {
          const element = document.querySelector(`[data-inline-id="${v.inline.id}"]`);
          const linkRect = element?.getBoundingClientRect();
          if (!container) return;
          const containerRect = container.getBoundingClientRect();
          if (linkRect) {
            const top = linkRect.top + (container?.scrollTop ?? 0) + containerRect.top + 4;
            const left = linkRect.left - containerRect.left;
            setPopupPosition({
              top,
              left,
            });
          }
          return;
        }
        const linkRect = document.getElementById('toolbar-link')?.getBoundingClientRect();
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const top = (container?.scrollTop ?? 0) + caret?.rect.top - containerRect.top + 4;
          if (linkRect) {
            const left = linkRect.left - containerRect.left - TOOLBAR_CHILD_WIDTH; // パレットに合わせるのでパレットの横幅分引く
            setPopupPosition({
              top,
              left,
            });
          } else {
            setPopupPosition({
              top,
              left: caret?.rect.left - containerRect.left,
            });
          }
        } else {
          const scrollEl = document.scrollingElement as HTMLElement;
          const top = scrollEl.scrollTop + caret?.rect.top + 4;
          const left = caret?.rect.left;
          setPopupPosition({ top, left });
        }
        setFormats(editor.getFormats(caret?.blockId, caret?.index, caret?.length));
        if (!currentCaretPosition) {
          setCurrentCaretPosition(v.caretPosition ? v.caretPosition : caret);
        }
      }),
    );
    return () => {
      subs.unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    if (!popupOpen) return;
    const handleClose = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        setPopupOpen(false);
      }
    };
    document.addEventListener('click', handleClose, true);
    return () => {
      document.removeEventListener('click', handleClose, true);
    };
  }, [popupOpen]);

  return ReactDOM.createPortal(
    popupOpen && (
      <div ref={modalRef}>
        {popupMode === 'openEnterLink' && (
          <>
            {!linkUrlRef.current ? (
              <EnterLinkContainer
                position="absolute"
                style={{ top: popupPosition?.top ?? 0, left: popupPosition?.left ?? 0 }}
                {...props}
                value={linkUrl}
                placeholder="リンク先を入力してください"
                onMouseDown={handleClick}
                onClick={handleClick}
                onChange={handleChange}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <LinkPopupContainer
                position="absolute"
                top={popupPosition?.top ?? 0}
                left={popupPosition?.left ?? 0}
              >
                <div>
                  <div>URL</div>
                  <input
                    {...props}
                    value={linkUrl}
                    placeholder="リンク先を入力してください"
                    onMouseDown={handleClick}
                    onClick={handleClick}
                    onChange={handleChange}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <DeleteButton onClick={handleDelete}>リンクを解除する</DeleteButton>
              </LinkPopupContainer>
            )}
          </>
        )}
      </div>
    ),
    getHtmlElement(scrollContainer) ?? document.body,
  );
});
