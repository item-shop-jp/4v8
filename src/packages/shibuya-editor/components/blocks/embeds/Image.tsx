import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../../types/editor';
import { Formats } from '../../../types/format';

export interface ImageProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  attributes: { thumbnail: string; original: string };
  editor: EditorController;
}

const ImageContainer = styled.div`
  outline: none;
  display: flex;
  justify-content: center;
`;
const Image = styled.img``;

export const ImageEmbed = React.memo(
  ({ blockId, contents, attributes, editor, ...props }: ImageProps) => {
    const imageRef = React.useRef(null);

    return (
      <ImageContainer ref={imageRef} {...props} contentEditable={false}>
        <Image src={attributes.thumbnail} />
      </ImageContainer>
    );
  },
);
