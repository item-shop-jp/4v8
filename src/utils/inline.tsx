import * as React from 'react';
import { Inline } from '../types/inline';
import { Formats } from '../types/format';

interface Props {
  contents: Inline[];
  formats?: Formats;
}

export const InlineContent: React.VFC<Props> = ({ contents, formats = {}, ...props }: Props) => {
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
            data-inline-id={content.id}
            data-format={inlineFormat}
            inline={content}
            {...props}
          />
        );
      })}
    </>
  );
};
