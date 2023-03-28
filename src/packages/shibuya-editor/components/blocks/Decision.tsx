import * as React from 'react';
import styled, { css } from 'styled-components';
import { EditorController } from '../../types/editor';
import { CheckSquare } from '../icons';
import { Formats } from '../../types/format';
import { BlockAttributes } from '../../types/block';
import { useMutationObserver } from '../../hooks/use-mutation-observer';

export interface DecisionProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  placeholder?: string;
  attributes: BlockAttributes;
  editor: EditorController;
}

const Container = styled.div`
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px 2px;
  padding-left: calc(40px + 1.5em * var(--indent));
  box-sizing: border-box;
  position: relative;
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;

const Icon = styled.div`
  position: absolute;
  font-family: Arial;
  font-size: 1.2em;
  line-height: 1;
  top: 3px;
  left: 6px;
`;

export const Decision = React.memo(
  ({
    blockId,
    contents,
    placeholder = 'Decision',
    attributes,
    editor,
    ...props
  }: DecisionProps) => {
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
      <Container
        ref={headerRef}
        spellCheck={false}
        placeholder={showPlaceholder ? placeholder : ''}
        {...props}
      >
        <Icon>😲</Icon>
        {contents}
      </Container>
    );
  },
);
