import * as React from 'react';
import styled from 'styled-components';
import { MutatingDots } from 'react-loader-spinner';
import { EditorController } from '../../../types/editor';
import { Formats } from '../../../types/format';

export interface ImageProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  attributes: { thumbnail: string; original: string; isUploading?: boolean };
  editor: EditorController;
}

const ImageContainer = styled.div`
  outline: none;
  display: flex;
  justify-content: center;
`;
const Image = styled.img``;
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

export const ImageEmbed = React.memo(
  ({
    blockId,
    contents,
    attributes: { thumbnail, original, isUploading = false },
    editor,
    ...props
  }: ImageProps) => {
    const imageRef = React.useRef(null);
    return (
      <ImageContainer ref={imageRef} {...props} contentEditable={false}>
        <Image src={thumbnail} />
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
      </ImageContainer>
    );
  },
);
