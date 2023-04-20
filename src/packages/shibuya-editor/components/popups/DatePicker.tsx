import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { getHtmlElement } from '../../utils/dom';
import { DayPicker } from 'react-day-picker';
import { ja } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

interface Props {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
  top?: number;
  left?: number;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  onClose?: () => void;
}

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  width: 312px;
  transform: scale(0.7);
  transform-origin: top right;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #ddd;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: end;
  padding: 4px 8px;
  border-bottom: 1px solid #eee;
`;
const ResetButton = styled.a`
  cursor: pointer;
  color: #a1a1aa;
  margin-right: 8px;
`;

export const DatePicker = React.memo(
  ({
    editor,
    scrollContainer,
    selected,
    onSelect,
    onClose,
    top = 0,
    left = 0,
    ...props
  }: Props) => {
    const modalRef = React.useRef<HTMLDivElement>(null);

    const handleSelectDate = React.useCallback(
      (day: Date | undefined) => {
        if (typeof onSelect !== 'function') return;
        onSelect(day);
      },
      [onSelect],
    );

    const handleReset = React.useCallback(() => {
      if (typeof onSelect !== 'function') return;
      onSelect(undefined);
    }, [onSelect]);

    React.useEffect(() => {
      if (typeof onClose !== 'function') return;
      const handleClose = (e: MouseEvent) => {
        if (!modalRef.current?.contains(e.target as Node)) {
          onClose();
        }
      };
      document.addEventListener('click', handleClose, true);
      return () => {
        document.removeEventListener('click', handleClose, true);
      };
    }, [onClose]);

    return ReactDOM.createPortal(
      <DatePickerWrapper ref={modalRef} style={{ top, left }}>
        {selected && (
          <Header>
            <ResetButton onClick={handleReset}>締め切り日をリセット</ResetButton>
          </Header>
        )}
        <DayPicker
          mode="single"
          required={true}
          locale={ja}
          selected={selected}
          onSelect={handleSelectDate}
        />
      </DatePickerWrapper>,
      getHtmlElement(scrollContainer) ?? document.body,
    );
  },
);
