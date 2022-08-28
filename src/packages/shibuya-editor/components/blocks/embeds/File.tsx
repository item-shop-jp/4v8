import * as React from 'react';
import styled from 'styled-components';
import prettyBytes from 'pretty-bytes';
import { MutatingDots } from 'react-loader-spinner';
import { EditorController } from '../../../types/editor';
import { Formats } from '../../../types/format';

export interface FileProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  attributes: { fileName: string; original: string; size: number };
  meta: { isUploading?: boolean };
  editor: EditorController;
}

const Container = styled.div`
  outline: none;
  display: flex;
`;
const IconContainer = styled.div`
  outline: none;
  display: flex;
  flex-shrink: 0;
  width: 50px;
`;
const Inner = styled.div`
  outline: none;
  display: flex;
  flex-shrink: 1;
  width: 100%;
`;
const ButtonContainer = styled.div`
  outline: none;
  display: flex;
  flex-shrink: 0;
  width: 50px;
`;

const FileName = styled.div``;
const Size = styled.div``;
const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const File = React.memo(
  ({
    blockId,
    contents,
    attributes: { fileName, original, size },
    meta: { isUploading = false },
    editor,
    ...props
  }: FileProps) => {
    const imageRef = React.useRef(null);
    const handleClick = React.useCallback((e: React.MouseEvent) => {}, []);
    const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);
    return (
      <Container ref={imageRef} {...props} contentEditable={false}>
        <IconContainer></IconContainer>
        <Inner>
          <FileName>{fileName}</FileName>
          <Size>{prettyBytes(size)}</Size>
        </Inner>
        <IconContainer></IconContainer>
        {isUploading && (
          <Loading>
            <MutatingDots
              height="100"
              width="100"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              visible={true}
            />
          </Loading>
        )}
      </Container>
    );
  },
);
