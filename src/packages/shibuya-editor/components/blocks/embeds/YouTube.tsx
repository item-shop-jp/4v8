import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../../types/editor';
import { Formats } from '../../../types/format';

export interface YouTubeProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  attributes: { videoId: string };
  editor: EditorController;
}

const Container = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    inset: 12px;
    width: calc(100% - 24px);
    height: 100%;
  }
`;

export const YouTube = React.memo(
  ({ blockId, contents, attributes, editor, ...props }: YouTubeProps) => {
    return (
      <Container {...props} contentEditable={false}>
        <iframe
          src={`https://www.youtube.com/embed/${attributes.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    );
  },
);
