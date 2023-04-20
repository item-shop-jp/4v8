import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { getHtmlElement } from '../../utils/dom';

interface Props {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
  top?: number;
  left?: number;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  onClose?: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  width: 312px;
  height: 352px;
  transform: scale(0.7);
  transform-origin: top right;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #ddd;
  background-color: #fff;
`;

export const AssigneePicker = React.memo(
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
    const members = editor.getModule('collaborator').getMembers();

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
      <Wrapper ref={modalRef} style={{ top, left }}>
        {members.map((member) => {
          return (
            <div key={member.id}>
              {member.id}: {member.name}
            </div>
          );
        })}
      </Wrapper>,
      getHtmlElement(scrollContainer) ?? document.body,
    );
  },
);
