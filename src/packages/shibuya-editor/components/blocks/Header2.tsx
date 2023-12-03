import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';
import { BlockAttributes } from '../../types/block';
import { useMutationObserver } from '../../hooks/use-mutation-observer';

export interface Header2Props {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  placeholder?: string;
  attributes: BlockAttributes;
  editor: EditorController;
}
const Header = styled.h2`
  font-size: 1.5rem;
  line-height: 2.25rem;
  outline: 0;
  box-sizing: border-box;
  padding: 1.5rem 0 0 calc(1.5rem * var(--indent));
  margin: 4rem 0 2rem;
  border-bottom: 1px solid rgba(60, 60, 60, 0.12);

  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;

export const Header2 = React.memo(
  ({ blockId, contents, placeholder = 'Header 2', attributes, editor, ...props }: Header2Props) => {
    const headerRef = React.useRef(null);
    const [showPlaceholder, setShowPlaceholder] = React.useState(false);
    const handleChangeElement = React.useCallback(() => {
      if (!headerRef.current) return;
      const innerText = (headerRef.current as HTMLElement).innerText.replaceAll(/\uFEFF/gi, '');
      setShowPlaceholder(innerText.length < 1);
    }, []);
    useMutationObserver(headerRef, handleChangeElement);

    React.useEffect(() => {
      handleChangeElement();
    }, []);

    return (
      <Header
        ref={headerRef}
        spellCheck={false}
        placeholder={showPlaceholder ? placeholder : ''}
        {...props}
      >
        {contents}
      </Header>
    );
  },
);
