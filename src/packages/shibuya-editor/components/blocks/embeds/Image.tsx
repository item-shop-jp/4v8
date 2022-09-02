import * as React from 'react';
import styled from 'styled-components';
import { MutatingDots } from 'react-loader-spinner';
import { EditorController } from '../../../types/editor';
import { Formats } from '../../../types/format';

export interface ImageProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  attributes: { thumbnail: string; original: string };
  meta: { isUploading?: boolean };
  editor: EditorController;
}

const Container = styled.div`
  outline: none;
  display: flex;
  margin: 4px 0;
  justify-content: center;
  img {
    max-width: 100%;
  }
`;
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

export const Image = React.memo(
  ({
    blockId,
    contents,
    attributes: { thumbnail, original },
    meta: { isUploading = false },
    editor,
    ...props
  }: ImageProps) => {
    const imageRef = React.useRef(null);
    const handleClick = React.useCallback((e: React.MouseEvent) => {}, []);
    const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);
    return (
      <Container ref={imageRef} {...props} contentEditable={false}>
        <img src={thumbnail} onClick={handleClick} onMouseDown={handleMouseDown} />
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
