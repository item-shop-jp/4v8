import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';
import { BlockAttributes } from '../../types/block';
import { useMutationObserver } from '../../hooks/use-mutation-observer';

export interface Header3Props {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  placeholder?: string;
  attributes: BlockAttributes;
  editor: EditorController;
}
const Header = styled.h3`
  font-size: 16px;
  outline: 0;
  transition: all 0.3s, color 0.3s;
  padding: 2px 12px;
  box-sizing: border-box;
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;

export const Header3 = React.memo(
  ({ blockId, contents, placeholder = 'Header 3', attributes, editor, ...props }: Header3Props) => {
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
      <Header ref={headerRef} placeholder={showPlaceholder ? placeholder : ''} {...props}>
        {contents}
      </Header>
    );
  },
);
