import * as React from 'react';
import styled, { css } from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';
import { BlockAttributes } from '../../types/block';
import { useMutationObserver } from '../../hooks/use-mutation-observer';
import { decimalToRoman, decimalToAlphabet } from '../../utils/number';

export interface OrderedListProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  placeholder?: string;
  attributes: BlockAttributes;
  meta: BlockAttributes;
  editor: EditorController;
}
const ListItem = styled.div<Pick<OrderedListProps, 'placeholder'>>`
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px 2px;
  box-sizing: border-box;
  position: relative;
  padding-left: calc(40px + 1.5em * var(--indent));
  ::before {
    position: absolute;
    height: 1em;
    left: calc(8px + 1.5em * (var(--indent) - 1));
    width: 3em;
    text-align: right;
    content: var(--content);
  }
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

export const OrderedList = React.memo(
  ({
    blockId,
    contents,
    placeholder = 'List',
    attributes,
    editor,
    meta,
    ...props
  }: OrderedListProps) => {
    const headerRef = React.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React.useState(false);
    const handleChangeElement = React.useCallback(() => {
      if (!headerRef.current) return;
      const innerText = (headerRef.current as HTMLElement).innerText.replaceAll(/\uFEFF/gi, '');
      setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement);

    const memoStyle = React.useMemo(() => {
      const numberType = (attributes?.indent ?? 0) % 3;
      const listNumber = meta?.listNumber ?? 1;
      if (listNumber < 1) {
        return {};
      }
      let content = '';
      switch (numberType) {
        case 1:
          content = decimalToAlphabet(listNumber);
          break;
        case 2:
          content = decimalToRoman(listNumber);
          break;
        default:
          content = listNumber;
          break;
      }

      return { '--content': `'${content}.'` } as React.CSSProperties;
    }, [meta?.listNumber, attributes?.indent]);

    React.useEffect(() => {
      handleChangeElement();
    }, []);

    return (
      <ListItem
        ref={headerRef}
        style={memoStyle}
        placeholder={showPlaceholder ? placeholder : ''}
        {...props}
      >
        {contents}
      </ListItem>
    );
  },
);
