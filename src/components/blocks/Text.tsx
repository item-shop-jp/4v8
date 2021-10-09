import * as React from 'react';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import styled from 'styled-components';
import isEqual from 'lodash.isequal';
import { Inline } from '../../types/inline';
import { Formats } from '../../types/format';
import { InlineContent } from '../../utils/inline';
import { EditorController } from '../../hooks/use-editor';
import { useBlockRenderer } from '../../hooks/use-block-renderer';
import { EditorEvents } from '../../constants';

interface Props {
  blockId: string;
  formats?: Formats;
  editor: EditorController;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const P = styled.p`
  width: 100%;
  padding: 0;
  font-size: 1rem;
  outline: 0;
  margin-top: 2px;
  margin-bottom: 1px;
`;

export const Text = React.memo(({ blockId, formats, editor, ...props }: Props) => {
  const contents = useBlockRenderer({ blockId, editor });

  const memoContents = React.useMemo(() => {
    return InlineContent({ contents, formats });
  }, [contents, formats]);

  return <P {...props}>{memoContents}</P>;
});
