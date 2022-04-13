import * as React from 'react';
import ReactDOM from 'react-dom';
import { Subscription } from 'rxjs';
import styled from 'styled-components';
import { EditorEvents } from '../../constants';
import { CaretPosition } from '../../types/caret';
import { EditorController } from '../../types/editor';
import { Inline, InlineAttributes } from '../../types/inline';
import { getScrollContainer } from '../../utils/dom';

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button:first-child {
    margin-right: 8px;
  }
`;

const Button = styled.button`
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

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
      },
      [link],
    );

    // TODO 保存できない問題の解決 linkのテキストをクリックしたときと、最初にlinkとして保存するときのcaretの位置が違うっぽい
    const handleSave = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ link }, currentCaretPosition);
        handleClose();
      },
      [link, formats],
    );

    const handleClose = React.useCallback(() => {
      setOpen(false);
      setLink('');
    }, []);

    const handleClickEditButton = React.useCallback(() => {
      editor.buttonClick({ mode: 'openEnterLink', inline });
    }, [inline]);

    React.useEffect(() => {
      const subs = new Subscription();
      const eventEmitter = editor.getEventEmitter();
      subs.add(
        eventEmitter.select(EditorEvents.EVENT_BUTTON_CLICKED).subscribe((v) => {
          const caret = editor.getCaretPosition();
          // TODO フォーカスが外れたらポップアップを閉じる
          if (!caret || !editor.hasFocus()) {
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
            setCurrentCaretPosition(caret);
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

    return ReactDOM.createPortal(
      open && (
        <>
          {mode === 'openEnterLink' && (
            <EnterLinkContainer
              style={{ top: position?.top ?? 0, left: position?.left ?? 0 }}
              {...props}
            >
              <Info>Enter link:</Info>
              <input value={link} onFocus={onFocus} onBlur={onBlur} onChange={handleChange} />
              <Button onClick={handleSave}>save</Button>
            </EnterLinkContainer>
          )}
          {mode === 'openPreview' && (
            <PreviewContainer
              style={{ top: position?.top ?? 0, left: position?.left ?? 0 }}
              {...props}
            >
              <div>URL:</div>
              <a href={inline?.attributes['link']}>https://{inline?.attributes['link']}</a>
              <ButtonContainer>
                <button onClick={handleClickEditButton}>edit</button>
                <button>remove</button>
              </ButtonContainer>
            </PreviewContainer>
          )}
        </>
      ),
      getScrollContainer(scrollContainer) ?? document.body,
    );
  },
);
