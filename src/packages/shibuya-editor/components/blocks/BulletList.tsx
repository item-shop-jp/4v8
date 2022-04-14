import * as React from 'react';
import styled, { css } from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { BlockAttributes } from '../../types/block';
import { useMutationObserver } from '../../hooks/use-mutation-observer';

export interface BulletListProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  placeholder?: string;
  attributes: BlockAttributes;
  editor: EditorController;
}

const ListItem = styled.div<Pick<BulletListProps, 'placeholder'>>`
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px 2px;
  padding-left: calc(40px + 1.5em * var(--indent));
  box-sizing: border-box;
  position: relative;
  ::before {
    position: absolute;
    font-family: Arial;
    font-size: 1.5em;
    line-height: 1;
    top: 3px;
    content: '•';
    left: calc(18px + 1em * var(--indent));
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

export const BulletList = React.memo(
  ({ blockId, contents, placeholder = 'List', attributes, editor, ...props }: BulletListProps) => {
    const headerRef = React.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React.useState(false);
    const handleChangeElement = React.useCallback(() => {
      if (!headerRef.current) return;
      const innerText = (headerRef.current as HTMLElement).innerText.replaceAll(/\uFEFF/gi, '');
      setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement, {
      childList: true,
      attributes: true,
      subtree: true,
      characterData: true,
    });

    React.useEffect(() => {
      handleChangeElement();
    }, []);

    return (
      <ListItem ref={headerRef} placeholder={showPlaceholder ? placeholder : ''} {...props}>
        {contents}
      </ListItem>
    );
  },
);
