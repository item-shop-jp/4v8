import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';
import { BlockAttributes } from '../../types/block';
import { useMutationObserver } from '../../hooks/use-mutation-observer';

export interface BulletListProps {
  blockId: string;
  formats?: Formats;
  contents: Inline[];
  placeholder?: string;
  attributes: BlockAttributes;
  editor: EditorController;
}

const ListItem = styled.div`
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px 2px 32px;
  box-sizing: border-box;
  ::before {
    position: absolute;
    height: 1em;
    left: 12px;
    content: '•';
  }
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
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
