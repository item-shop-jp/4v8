import * as React from 'react';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import styled from 'styled-components';
import { Inline } from '../../types/inline';
import { Formats } from '../../types/format';
import { InlineContent } from '../../utils/inline';
import { EditorController } from '../../hooks/use-editor';
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
  const [contents, setContents] = React.useState<Inline[]>([]);

  React.useEffect(() => {
    const block = editor.getBlock(blockId);
    const eventEmitter = editor.getEventEmitter();
    if (block) {
      setContents(block.contents);
    }

    const subs = new Subscription();

    subs.add(
      eventEmitter
        .on<string[]>(EditorEvents.EVENT_BLOCK_RERENDER)
        .pipe(filter((affectedIds) => affectedIds.includes(blockId)))
        .subscribe(() => {
          const block = editor.getBlock(blockId);
          if (block) {
            setContents([...block.contents]);
          }
        }),
    );

    return () => {
      subs.unsubscribe();
    };
  }, [blockId]);

  const memoContents = React.useMemo(() => {
    return InlineContent({ contents, formats });
  }, [contents, formats]);

  return <P {...props}>{memoContents}</P>;
});
