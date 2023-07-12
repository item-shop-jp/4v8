import * as React from 'react';
import styled from 'styled-components';
import prettyBytes from 'pretty-bytes';
import { RotatingLines } from 'react-loader-spinner';
import { EditorController } from '../../../types/editor';
import { Formats } from '../../../types/format';
import { Download } from '../../icons';
import { Tooltip } from '../../popups';

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
  padding: 0 12px;
  background: #eee;
  border-radius: 8px;
  margin: 4px 12px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 50px;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 8px;
  cursor: pointer;
  &:hover svg {
    fill: #666;
  }
`;
const Inner = styled.div`
  flex-shrink: 1;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
`;

const FileName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Size = styled.div`
  font-size: 12px;
  color: #999;
  display: flex;
`;
const Loading = styled.div`
  margin-left: 8px;
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
    const handleDownload = React.useCallback((e: React.MouseEvent) => {}, []);
    const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);
    return (
      <Container ref={imageRef} {...props} contentEditable={false}>
        <IconContainer>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11V17M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 13.5L12 11L14.5 13.5"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconContainer>
        <Inner>
          <FileName>{fileName}</FileName>
          <Size>
            {prettyBytes(size)}
            {isUploading && (
              <Loading>
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="18"
                  visible={true}
                />
              </Loading>
            )}
          </Size>
        </Inner>
        <IconContainer>
          <Tooltip
            targetElement={
              <Button onClick={handleDownload}>
                <Download />
              </Button>
            }
            maxWidth={200}
            position={'bottom'}
          >
            ファイルをダウンロードする
          </Tooltip>
        </IconContainer>
      </Container>
    );
  },
);
