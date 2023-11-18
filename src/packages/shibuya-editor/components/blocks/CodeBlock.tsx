import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-yaml';
import { BlockAttributes } from '../../types';
import { CodeBlockLanguages } from '../../constants';

export interface CodeBlockProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  editor: EditorController;
  attributes: BlockAttributes;
}

const Wrapper = styled.div`
  padding: 1rem 0;
  background: #272822;
  outline: 0;
  overflow: auto;
  border-radius: 0.3em;
  margin: 2rem 0;
`;

const Container = styled.div`
  outline: 0;
  color: #f8f8f2;
  font-size: 0.875rem;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;
  hyphens: none;
  padding-left: calc(20px + 1.5em * var(--indent));
`;

const LanguageSelectButton = styled.div<{ opacity: number }>`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: opacity 0.3s;
  font-size: 12px;
  color: #ccc;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity};
  user-select: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const LanguageSelector = styled.div`
  position: absolute;
  top: 28px;
  right: -40px;
  width: 120px;
  font-size: 12px;
  padding: 12px;
  color: #ccc;
  box-shadow: 10px 10px 10px 10px rgba(255, 255, 255, 0.3);
  background: #2b2c25;
  border-radius: 8px;
  z-index: 1;
  div.button {
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const CodeBlock = React.memo(
  ({ blockId, editor, contents, formats, attributes, ...props }: CodeBlockProps) => {
    const [displayButtons, setDisplayButtons] = React.useState(false);
    const [displayLanguageSelector, setDisplayLanguageSelector] = React.useState(false);

    const handleShowSelector = React.useCallback(() => {
      setDisplayButtons(true);
    }, []);
    const handleHideSelector = React.useCallback(() => {
      setDisplayButtons(false);
    }, []);
    const handleClickLanguageSelectButton = React.useCallback(() => {
      setDisplayLanguageSelector((prev) => !prev);
    }, []);
    const handleSelectLanguage = React.useCallback(
      (language: string) => (e: React.MouseEvent) => {
        const block = editor.getBlock(blockId);
        if (block) {
          editor.updateBlock({
            ...block,
            attributes: {
              ...block.attributes,
              language,
            },
          });
          editor.render([blockId]);
        }

        setDisplayLanguageSelector(false);
      },
      [blockId, editor],
    );

    const memoLanguage = React.useMemo(() => {
      return attributes?.language ?? 'typescript';
    }, [attributes]);

    return (
      <Wrapper onMouseEnter={handleShowSelector} onMouseLeave={handleHideSelector}>
        <Container spellCheck={false} {...props}>
          {contents}
        </Container>
        <LanguageSelectButton
          opacity={displayButtons ? 1 : 0}
          contentEditable={false}
          onClick={handleClickLanguageSelectButton}
        >
          {memoLanguage}
        </LanguageSelectButton>
        {displayLanguageSelector && (
          <LanguageSelector>
            {CodeBlockLanguages.map((v, i) => {
              return (
                <div key={i} className="button" onClick={handleSelectLanguage(v)}>
                  {v}
                </div>
              );
            })}
          </LanguageSelector>
        )}
      </Wrapper>
    );
  },
);
