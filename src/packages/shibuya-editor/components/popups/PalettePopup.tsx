import * as React from 'react';
import ReactDOM from 'react-dom';
import { Subscription } from 'rxjs';
import styled from 'styled-components';
import { EditorEvents } from '../../constants';
import { CaretPosition, EditorController, InlineAttributes } from '../../types';
import { getHtmlElement } from '../../utils/dom';

export interface PalettePopupProps {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

interface PopupPosition {
  top: number;
  left: number;
}

const Container = styled.div`
  position: absolute;
  background-color: #18181b;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px #ddd;
  color: #a1a1aa;
  padding: 8px 12px;
  white-space: nowrap;
  display: flex;
  height: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Color = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
  cursor: pointer;
  border-radius: 40px;
`;

export const PalettePopup = React.memo(({ editor, scrollContainer }: PalettePopupProps) => {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [formats, setFormats] = React.useState<InlineAttributes>({});
  const [currentCaretPosition, setCurrentCaretPosition] = React.useState<CaretPosition | null>();
  const [position, setPosition] = React.useState<PopupPosition>();
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleClose = React.useCallback(() => {
    setPopupOpen(false);
  }, []);

  const handleFormatColor = React.useCallback(
    (color: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      if (formats?.color === color) {
        editor.getModule('toolbar').formatInline({ color: false }, currentCaretPosition);
        setFormats({ ...formats, color: null });
      } else {
        editor.getModule('toolbar').formatInline({ color }, currentCaretPosition);
        setFormats({ ...formats, color });
      }
    },
    [formats, currentCaretPosition],
  );

  React.useEffect(() => {
    const subs = new Subscription();
    const eventEmitter = editor.getEventEmitter();
    subs.add(
      eventEmitter.select(EditorEvents.EVENT_PALETTE_CLICK).subscribe((v) => {
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
        const paletteToolbarRect = document
          .getElementById('toolbar-palette')
          ?.getBoundingClientRect();
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const top = (container?.scrollTop ?? 0) + caret.rect.top - containerRect.top + 4;
          if (paletteToolbarRect && bubbleToolbarRect) {
            const left =
              caret.rect.left -
              containerRect.left +
              (paletteToolbarRect.left - bubbleToolbarRect.left) -
              (104 - paletteToolbarRect.width) / 2; // ContainerはInputの幅

            setPosition({
              top,
              left,
            });
          } else {
            setPosition({
              top,
              left: caret.rect.left - containerRect.left,
            });
          }
        } else {
          const scrollEl = document.scrollingElement as HTMLElement;
          const top = scrollEl.scrollTop + caret.rect.top + 4;
          const left = caret.rect.left;
          setPosition({ top, left });
        }
        setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
        setCurrentCaretPosition(v.caretPosition ? v.caretPosition : caret);
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
      <Container
        ref={modalRef}
        id="palette-popup"
        style={{ top: position?.top ?? 0, left: position?.left ?? 0 }}
      >
        <Color color="#EF4444" onClick={handleFormatColor('#EF4444')} />
        <Color color="#55B938" onClick={handleFormatColor('#55B938')} />
        <Color color="#EAC645" onClick={handleFormatColor('#EAC645')} />
        <Color color="#5296D5" onClick={handleFormatColor('#5296D5')} />
      </Container>
    ),
    getHtmlElement(scrollContainer) ?? document.body,
  );
});
