import * as React from 'react';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { EditorController } from '../types/editor';
import { Block } from '../types/block';
import { EditorEvents } from '../constants';

interface Props {
  parentBlockId: string;
  blockId: string;
  editor: EditorController;
}

interface Payload {
  parentBlockId: string;
  affectedIds: string[];
}

export function useChildBlockRenderer({ parentBlockId, blockId, editor }: Props): Block | null {
  const [block, setBlock] = React.useState<Block | null>(null);

  React.useEffect(() => {
    const parentBlock = editor.getBlock(parentBlockId);
    const eventEmitter = editor.getEventEmitter();
    if (parentBlock) {
      const currentBlock = parentBlock.childBlocks.find((v) => v.id === blockId);
      if (currentBlock) {
        setBlock(currentBlock);
      }
    }

    const subs = new Subscription();

    subs.add(
      eventEmitter
        .select<Payload>(EditorEvents.EVENT_CHILD_BLOCK_RERENDER)
        .pipe(filter((payload) => payload.affectedIds.includes(blockId)))
        .subscribe((payload) => {
          const parentBlock = editor.getBlock(payload.parentBlockId);
          if (!parentBlock) return;
          const currentBlock = parentBlock.childBlocks.find((v) => v.id === blockId);
          if (!currentBlock) return;
          setBlock({
            ...currentBlock,
            contents: currentBlock.contents.map((v) => {
              return { ...v, id: uuidv4() };
            }),
          });
        }),
    );

    subs.add(
      eventEmitter
        .select<Payload>(EditorEvents.EVENT_CHILD_BLOCK_RERENDER_FORCE)
        .pipe(filter((payload) => payload.affectedIds.includes(blockId)))
        .subscribe((payload) => {
          const parentBlock = editor.getBlock(payload.parentBlockId);
          if (!parentBlock) return;
          const currentBlock = parentBlock.childBlocks.find((v) => v.id === blockId);
          if (!currentBlock) return;
          setBlock((prev) => {
            setTimeout(() =>
              setBlock({
                ...currentBlock,
                contents: currentBlock.contents.map((v) => {
                  return { ...v, id: uuidv4() };
                }),
              }),
            );
            return { ...currentBlock, contents: [] };
          });
        }),
    );

    return () => {
      subs.unsubscribe();
    };
  }, [blockId]);

  return block;
}
