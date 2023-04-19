import * as React from 'react';
import styled, { css } from 'styled-components';
import { EditorController } from '../../types/editor';
import { CheckSquare, Schedule, Assignment } from '../icons';
import { Formats } from '../../types/format';
import { DatePicker } from '../popups';
import { BlockAttributes } from '../../types/block';
import { useMutationObserver } from '../../hooks/use-mutation-observer';
import { getHtmlElement } from '../../utils/dom';
import { formatDate } from '../../utils/date';

export interface TaskProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  placeholder?: string;
  attributes: BlockAttributes;
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  flex-shrink: 0;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconButton = styled.div`
  cursor: pointer;
  margin: 4px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #a1a1aa;
`;

const Container = styled.div<Pick<TaskProps, 'placeholder'>>`
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px 2px;
  padding-left: calc(40px + 1.5em * var(--indent));
  box-sizing: border-box;
  position: relative;
  width: 100%;
  ${({ placeholder }) => {
    return (
      placeholder &&
      css`
        ::after {
          opacity: 0.3;
          content: attr(placeholder);
        }
      `
    );
  }}
`;
const CheckBoxOuter = styled.div`
  position: absolute;
  left: 4px;
  top: -3px;
  width: 32px;
  height: 32px;
  border-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

export const Task = React.memo(
  ({
    blockId,
    contents,
    placeholder = 'Task',
    attributes,
    editor,
    scrollContainer,
    ...props
  }: TaskProps) => {
    const headerRef = React.useRef<HTMLDivElement>(null);
    const [showPlaceholder, setShowPlaceholder] = React.useState(false);
    const [isHover, setHover] = React.useState(false);
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const handleChangeElement = React.useCallback(() => {
      if (!headerRef.current) return;
      const innerText = (headerRef.current as HTMLElement).innerText.replaceAll(/\uFEFF/gi, '');
      setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement);

    const handleClickDatePicker = React.useCallback(() => {
      setShowDatePicker(!showDatePicker);
    }, [showDatePicker]);

    const handleCloseDatePicker = React.useCallback(() => {
      setTimeout(() => setShowDatePicker(false));
    }, [showDatePicker]);

    const handleSelectDatePicker = React.useCallback(
      (date: Date | undefined) => {
        const currentBlock = editor.getBlock(blockId);
        if (currentBlock) {
          editor.updateBlock({
            ...currentBlock,
            attributes: {
              ...currentBlock.attributes,
              deadline: date ? date.toString() : null,
            },
          });
          editor.render([blockId]);
        }
        setTimeout(() => setShowDatePicker(false));
      },
      [showDatePicker],
    );

    React.useEffect(() => {
      handleChangeElement();
    }, []);

    const handleClickCheckBox = React.useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const currentBlock = editor.getBlock(blockId);
        if (!currentBlock) return;
        editor.updateBlock({
          ...currentBlock,
          attributes: {
            ...currentBlock.attributes,
            checked: !attributes.checked,
          },
        });
        editor.render([blockId]);
      },
      [blockId, attributes],
    );

    const handleMouseOver = React.useCallback((e: React.MouseEvent) => {
      setHover(true);
    }, []);

    const handleMouseOut = React.useCallback((e: React.MouseEvent) => {
      setHover(false);
    }, []);

    const checked = attributes?.checked ?? false;

    const datePickerPosition = { top: 0, left: 0 };
    if (scrollContainer) {
      const container = getHtmlElement(scrollContainer);
      const containerRect = container?.getBoundingClientRect();
      const blockRect = headerRef.current?.getBoundingClientRect();
      datePickerPosition.top =
        (container?.scrollTop ?? 0) - (containerRect?.top ?? 0) + (blockRect?.top ?? 0) - 60;
      datePickerPosition.left = (blockRect?.left ?? 0) + (blockRect?.width ?? 0) - 400;
    } else {
      const scrollEl = document.scrollingElement as HTMLElement;
      const blockRect = headerRef.current?.getBoundingClientRect();
      datePickerPosition.top = (scrollEl?.scrollTop ?? 0) + (blockRect?.top ?? 0) - 60;
      datePickerPosition.left = (blockRect?.left ?? 0) + (blockRect?.width ?? 0) - 400;
    }

    return (
      <>
        <Wrapper
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={isHover ? { backgroundColor: '#f7f9fa' } : {}}
        >
          <Container
            ref={headerRef}
            spellCheck={false}
            placeholder={showPlaceholder ? placeholder : ''}
            style={{
              textDecoration: checked ? 'line-through' : 'none',
            }}
            {...props}
          >
            <CheckBoxOuter onClick={handleClickCheckBox}>
              <CheckSquare size="20px" checked={checked} />
            </CheckBoxOuter>
            {contents}
          </Container>
          <Buttons>
            <IconButton onClick={handleClickDatePicker}>
              <Assignment size="20px" fill="#A1A1AA" />
            </IconButton>
            <IconButton onClick={handleClickDatePicker}>
              {attributes?.deadline ? (
                formatDate(new Date(attributes.deadline))
              ) : (
                <Schedule size="20px" fill="#A1A1AA" />
              )}
            </IconButton>
          </Buttons>
        </Wrapper>
        {showDatePicker && (
          <DatePicker
            editor={editor}
            scrollContainer={scrollContainer}
            top={datePickerPosition.top}
            left={datePickerPosition.left}
            selected={new Date()}
            onSelect={handleSelectDatePicker}
            onClose={handleCloseDatePicker}
          />
        )}
      </>
    );
  },
);
