import * as React from 'react';
import ReactDOM from 'react-dom';
import { Subscription } from 'rxjs';
import styled from 'styled-components';
import { EditorEvents } from '../../constants';
import { CaretPosition } from '../../types/caret';
import { EditorController } from '../../types/editor';
import { Inline, InlineAttributes } from '../../types/inline';
import { getHtmlElement } from '../../utils/dom';
import { copyObject } from '../../utils/object';

export interface LinkPopupProps {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

interface PopupPosition {
  top: number;
  left: number;
}

interface Props {
  editor: EditorController;
  style?: React.ComponentProps<'div'>['style'];
  scrollContainer?: HTMLElement | string;
  onFocus?: () => void;
  onBlur?: () => void;
  onLinkSave?: (link: string, event: React.MouseEvent) => void;
}

const EnterLinkContainer = styled.input`
  position: absolute;
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

export const LinkPopup = React.memo(
  ({ editor, scrollContainer, onFocus, onBlur, onLinkSave, ...props }: Props) => {
    const [formats, setFormats] = React.useState<InlineAttributes>({});
    const [linkUrl, setLinkUrl] = React.useState('');
    const [popupMode, setPopupMode] = React.useState();
    const [popupOpen, setPopupOpen] = React.useState(false);
    const [popupPosition, setPopupPosition] = React.useState<PopupPosition>();
    const [currentCaretPosition, setCurrentCaretPosition] = React.useState<CaretPosition | null>();
    const modalRef = React.useRef<HTMLDivElement>(null);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setLinkUrl(event.target.value);
      },
      [linkUrl],
    );

    const handleSave = React.useCallback(() => {
      editor.getModule('toolbar').formatInline({ link: linkUrl }, currentCaretPosition);
      setPopupOpen(false);
      setTimeout(() => {
        editor.focus();
      }, 10);
    }, [linkUrl, currentCaretPosition]);

    const handleClose = React.useCallback(() => {
      setPopupOpen(false);
      setLinkUrl('');
    }, []);

    React.useEffect(() => {
      const subs = new Subscription();
      const eventEmitter = editor.getEventEmitter();
      subs.add(
        eventEmitter.select(EditorEvents.EVENT_LINK_CLICK).subscribe((v) => {
          const caret = editor.getCaretPosition();
          if (!caret) {
            handleClose();
            return;
          }
          setPopupOpen(true);
          const container = getHtmlElement(scrollContainer);
          const bubbleToolbarRect = document
            .getElementById('bubble-toolbar')
            ?.getBoundingClientRect();
          const linkRect = document.getElementById('toolbar-link')?.getBoundingClientRect();

          if (container) {
            const containerRect = container.getBoundingClientRect();
            const top = (container?.scrollTop ?? 0) + caret.rect.top - containerRect.top + 4;
            if (linkRect && bubbleToolbarRect) {
              const left =
                caret.rect.left -
                containerRect.left +
                (linkRect.left - bubbleToolbarRect.left) -
                (200 - linkRect.width) / 2; // 200はInputの幅

              setPopupPosition({
                top,
                left,
              });
            } else {
              setPopupPosition({
                top,
                left: caret.rect.left - containerRect.left,
              });
            }
          } else {
            const scrollEl = document.scrollingElement as HTMLElement;
            const top = scrollEl.scrollTop + caret.rect.top + 4;
            const left = caret.rect.left;
            setPopupPosition({ top, left });
          }
          setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
          if (!currentCaretPosition) {
            setCurrentCaretPosition(v.caretPosition ? v.caretPosition : caret);
          }
          if (v.mode) {
            setPopupMode(v.mode);
          }
          if (v.link) {
            setLinkUrl(v.link);
          } else {
            setLinkUrl('');
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
              <EnterLinkContainer
                style={{ top: popupPosition?.top ?? 0, left: popupPosition?.left ?? 0 }}
                {...props}
                value={linkUrl}
                placeholder="リンク先を入力してください"
                onFocus={onFocus}
                onBlur={handleSave}
                onChange={handleChange}
              />
            </>
          )}
        </div>
      ),
      getHtmlElement(scrollContainer) ?? document.body,
    );
  },
);