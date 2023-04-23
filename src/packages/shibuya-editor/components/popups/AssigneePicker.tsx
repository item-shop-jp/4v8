import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { getHtmlElement } from '../../utils/dom';
import { Member } from '../../modules';

interface Props {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
  top?: number;
  left?: number;
  selected?: Date;
  onSelect?: (member: Member) => void;
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

const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #f7f9fa;
  }
`;

const MemberIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 100%;
  box-shadow: 0px 1px 5px 0px;
  cursor: auto;
  overflow: hidden;
  transition: top 0.3s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  font-size: 22px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
    const [searchValue, setSearchValue] = React.useState('');
    const members = editor.getModule('collaborator').getMembers();

    const handleChangeSearchValue = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setSearchValue(event.target.value);
      },
      [],
    );

    const handleKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
      event.stopPropagation();
    }, []);

    const handleSelectMember = React.useCallback(
      (member: Member) => (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (typeof onSelect !== 'function') return;
        onSelect(member);
      },
      [onSelect],
    );

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

    const memoMembers = React.useMemo(() => {
      if (!searchValue) {
        return members.slice(0, 10);
      }
      return members
        .filter((v) => {
          return v.name.indexOf(searchValue.toLowerCase()) !== -1;
        })
        .slice(0, 10);
    }, [members, searchValue]);

    return ReactDOM.createPortal(
      <Wrapper ref={modalRef} style={{ top, left }}>
        <div>
          <input
            type="text"
            placeholder="名前を検索"
            value={searchValue}
            onKeyDown={handleKeyDown}
            onChange={handleChangeSearchValue}
          />
        </div>
        {memoMembers.map((member) => {
          return (
            <MemberInfo key={member.id} onClick={handleSelectMember(member)}>
              <MemberIcon>
                {member?.imageUrl ? (
                  <img draggable="false" src={member?.imageUrl} />
                ) : (
                  <Text>{member.name.slice(0, 1)}</Text>
                )}
              </MemberIcon>
              <div style={{ marginLeft: '8px' }}>{member.name}</div>
            </MemberInfo>
          );
        })}
      </Wrapper>,
      getHtmlElement(scrollContainer) ?? document.body,
    );
  },
);
