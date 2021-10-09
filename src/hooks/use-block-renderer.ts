import * as React from 'react';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import isEqual from 'lodash.isequal';
import { EditorController } from '../hooks/use-editor';
import { Inline } from '../types/inline';
import { EditorEvents } from '../constants';

interface Props {
  blockId: string;
  editor: EditorController;
}

export function useBlockRenderer({ blockId, editor }: Props): Inline[] {
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
            setContents((prev) => {
              if (isEqual(block.contents, prev)) {
                setTimeout(() => setContents(block.contents));
                return [];
              }
              return [...block.contents];
            });
          }
        }),
    );

    return () => {
      subs.unsubscribe();
    };
  }, [blockId]);

  return contents;
}
