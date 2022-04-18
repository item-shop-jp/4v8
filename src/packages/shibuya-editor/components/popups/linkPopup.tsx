import * as React from 'react';
import ReactDOM from 'react-dom';
import { Subscription } from 'rxjs';
import styled from 'styled-components';
import { EditorEvents } from '../../constants';
import { CaretPosition } from '../../types/caret';
import { EditorController } from '../../types/editor';
import { Inline, InlineAttributes } from '../../types/inline';
import { getInlineContents } from '../../utils/block';
import { getScrollContainer } from '../../utils/dom';
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

const EnterLinkContainer = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap;
  display: flex;
`;

const PreviewContainer = styled.div`
  position: absolute;
  min-width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #ddd;
  color: #444;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  margin-right: 8px;
`;

const Link = styled.a`
  padding: 0 8px;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const LinkInput = styled.input``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button:first-child {
    margin-right: 8px;
  }
`;

const Button = styled.button``;

const SingleButton = styled(Button)`
  margin-left: 16px;
`;

export const LinkPopup = React.memo(
  ({ editor, scrollContainer, onFocus, onBlur, onLinkSave, ...props }: Props) => {
    const [formats, setFormats] = React.useState<InlineAttributes>({});
    const [inline, setInline] = React.useState<Inline>();
    const [link, setLink] = React.useState('');
    const [mode, setMode] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState<PopupPosition>();
    const [currentCaretPosition, setCurrentCaretPosition] = React.useState<CaretPosition | null>();
    const modalRef = React.useRef<HTMLDivElement>(null);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
      },
      [link],
    );

    const handleSave = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ link }, currentCaretPosition);
        handleClose();
      },
      [link, formats, currentCaretPosition],
    );

    const handleClose = React.useCallback(() => {
      setOpen(false);
      setLink('');
    }, []);

    const handleEdit = React.useCallback(() => {
      const eventEmitter = editor.getEventEmitter();
      eventEmitter.emit(EditorEvents.EVENT_LINK_CLICK, {
        mode: 'openEnterLink',
        inline,
        caretPosition: currentCaretPosition,
      });
    }, [inline, currentCaretPosition]);

    const handleRemove = React.useCallback(() => {
      if (!currentCaretPosition || !inline) return;
      const block = editor.getBlock(currentCaretPosition.blockId);
      if (!block) return;
      const inlineIndex = block.contents.findIndex((v) => v.id === inline.id);
      if (inlineIndex === -1) return;
      editor.updateBlock({
        ...block,
        contents: copyObject([
          ...block.contents.slice(0, inlineIndex),
          {
            ...block.contents[inlineIndex],
            attributes: {
              ...block.contents[inlineIndex].attributes,
              link: false,
            },
          },
          ...block.contents.slice(inlineIndex + 1),
        ]),
      });
      editor.render([block.id]);
      setOpen(false);
      setLink('');
      setTimeout(() => {
        editor.focus();
      }, 10);
    }, [inline]);

    React.useEffect(() => {
      const subs = new Subscription();
      const eventEmitter = editor.getEventEmitter();
      subs.add(
        eventEmitter.select(EditorEvents.EVENT_LINK_CLICK).subscribe((v) => {
          console.log(1);
          const caret = editor.getCaretPosition();
          if (!caret) {
            handleClose();
            return;
          }
          setOpen(true);
          const container = getScrollContainer(scrollContainer);
          if (container) {
            const containerRect = container.getBoundingClientRect();
            const top = (container?.scrollTop ?? 0) + caret.rect.top - containerRect.top;
            const left = caret.rect.left - containerRect.left;
            setPosition({ top, left });
          } else {
            const scrollEl = document.scrollingElement as HTMLElement;
            const top = scrollEl.scrollTop + caret.rect.top;
            const left = caret.rect.left;
            setPosition({ top, left });
          }
          setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
          if (!currentCaretPosition) {
            setCurrentCaretPosition(v.caretPosition ? v.caretPosition : caret);
          }
          if (v.mode) {
            setMode(v.mode);
          }
          if (v.inline) {
            setInline(v.inline);
            setLink(v.inline?.attributes['link']);
          }
        }),
      );
      return () => {
        subs.unsubscribe();
      };
    }, []);

    React.useEffect(() => {
      if (!open) return;
      const handleClsoe = (e: MouseEvent) => {
        if (!modalRef.current?.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener('click', handleClsoe, true);
      return () => {
        document.removeEventListener('click', handleClsoe, true);
      };
    }, [open]);

    return ReactDOM.createPortal(
      open && (
        <div ref={modalRef}>
          {mode === 'openEnterLink' && (
            <EnterLinkContainer
              style={{ top: position?.top ?? 0, left: position?.left ?? 0 }}
              {...props}
            >
              <Info>Enter link:</Info>
              <LinkInput value={link} onFocus={onFocus} onBlur={onBlur} onChange={handleChange} />
              <SingleButton onClick={handleSave}>save</SingleButton>
            </EnterLinkContainer>
          )}
          {mode === 'openPreview' && (
            <PreviewContainer
              style={{ top: position?.top ?? 0, left: position?.left ?? 0 }}
              {...props}
            >
              <div>Visit URL:</div>
              <Link href={inline?.attributes['link']}>https://{inline?.attributes['link']}</Link>
              <ButtonContainer>
                <Button onClick={handleEdit}>edit</Button>
                <Button onClick={handleRemove}>remove</Button>
              </ButtonContainer>
            </PreviewContainer>
          )}
        </div>
      ),
      getScrollContainer(scrollContainer) ?? document.body,
    );
  },
);
