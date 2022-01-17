import * as React from 'react';
import styled from 'styled-components';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';

interface ContainerProps {
  contents: Inline[];
  formats: Formats;
}

export const InlineContainer: React.VFC<ContainerProps> = ({ contents, formats, ...props }: ContainerProps) => {
  return (
    <>
      {contents.map((content) => {
        let Container;
        const inlineFormat = `inline/${content.type.toLocaleLowerCase()}`;
        if (!formats[inlineFormat]) {
          // defalut block format
          Container = formats['inline/text'];
        } else {
          Container = formats[inlineFormat];
        }
        return (
          <Container
            key={content.id}
            formats={formats}
            data-inline-id={content.id}
            data-format={inlineFormat}
            data-attributes={JSON.stringify(content.attributes)}
            inline={content}
            {...props}
          />
        );
      })}
    </>
  );
};
