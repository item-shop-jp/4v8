import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { getHtmlElement } from '../../utils/dom';
import { Member } from '../../modules';
import { Close } from '../../components/icons';

interface Props {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
  top?: number;
  left?: number;
  selectedMembers: Member[];
  onSelect?: (member: Member) => void;
  onRemove?: (member: Member) => void;
  onClose?: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  width: 256px;
  max-height: 320px;
  transform: scale(0.7);
  transform-origin: top right;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 5px #ddd;
  background-color: #18181b;
  display: flex;
  flex-direction: column;
`;

const Search = styled.div`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  flex-grow: 1;
  border-bottom: 1px solid #a1a1aa;
  input {
    width: 100%;
    height: 44px;
    padding-left: 8px;
    box-sizing: border-box;
    background-color: #18181b;
    color: #fff;
    border: none;
    outline: none;
    font-size: 16px;
  }
`;

const Members = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 0;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MemberInfo = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 8px 16px;
  height: 52px;
  font-size: 16px;
  color: #fff;
  position: relative;
  cursor: ${({ selected }) => (selected ? 'auto' : 'pointer')};
  background-color: ${({ selected }) => (selected ? '#2c2c31' : '#18181b')};
  &:hover {
    background-color: #2c2c31;
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
  background-color: #fff;
  margin-right: 8px;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.div`
  max-height: 48px;
  margin-left: 8px;
`;

const Text = styled.div`
  font-size: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  color: #000;
`;

const RemoveButton = styled.a`
  width: 20px;
  height: 20px;
  background: #ffffff;
  padding: 4px;
  border-radius: 40px;
  position: absolute;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AssigneePicker = React.memo(
  ({
    editor,
    scrollContainer,
    selectedMembers,
    onSelect,
    onClose,
    onRemove,
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
        setSearchValue('');
      },
      [onSelect],
    );

    const handleRemove = React.useCallback(
      (member: Member) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (typeof onRemove !== 'function') return;
        onRemove(member);
      },
      [onRemove],
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

    const memoMembers: (Member & { selected?: boolean })[] = React.useMemo(() => {
      let filteredMembers = members;
      if (searchValue !== '') {
        filteredMembers = filteredMembers.filter((v) => {
          return v.name.indexOf(searchValue.toLowerCase()) !== -1;
        });
        return filteredMembers.slice(0, 10).map((v) => {
          return { ...v, selected: selectedMembers.some((m) => m.id === v.id) };
        });
      }
      filteredMembers = filteredMembers.filter((v) => !selectedMembers.some((m) => m.id === v.id));

      return [...selectedMembers, ...filteredMembers].slice(0, 10).map((v) => {
        return { ...v, selected: selectedMembers.some((m) => m.id === v.id) };
      });
    }, [members, searchValue, selectedMembers]);

    return ReactDOM.createPortal(
      <Wrapper ref={modalRef} style={{ top, left }}>
        <Search>
          <input
            type="text"
            placeholder="ユーザーを絞り込む"
            value={searchValue}
            onKeyDown={handleKeyDown}
            onChange={handleChangeSearchValue}
          />
        </Search>
        <Members>
          {memoMembers.map((member) => {
            return (
              <MemberInfo
                key={member.id}
                onClick={handleSelectMember(member)}
                selected={member.selected ?? false}
              >
                <MemberIcon>
                  {member?.imageUrl ? (
                    <img draggable="false" src={member?.imageUrl} />
                  ) : (
                    <Text>{member.name.slice(0, 1)}</Text>
                  )}
                </MemberIcon>
                <MemberName>{member.name}</MemberName>
                {member.selected && (
                  <RemoveButton href="#" onClick={handleRemove(member)}>
                    <Close />
                  </RemoveButton>
                )}
              </MemberInfo>
            );
          })}
        </Members>
      </Wrapper>,
      getHtmlElement(scrollContainer) ?? document.body,
    );
  },
);
