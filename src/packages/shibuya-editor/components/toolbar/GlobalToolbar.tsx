import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Subscription, pipe, combineLatestWith } from 'rxjs';
import { EditorEvents } from '../../constants';
import { EditorController } from '../../types/editor';
import { InlineAttributes } from '../../types/inline';
import {
  FormatBlockQuote,
  FormatBulletList,
  FormatCodeBlock,
  FormatDecision,
  FormatHeader1,
  FormatHeader2,
  FormatHeader3,
  FormatNumberList,
  FormatTask,
} from '../icons';
import { Block, BlockAttributes, BlockType } from '../../types';
import { Tooltip } from '../popups';
import { createBlock } from '../../utils/block';
import { FormatAttachment } from '../icons/toolbar/FormatAttachment';

export interface GlobalToolbarProps {
  editor: EditorController;
}

interface ButtonProps {
  active: boolean;
}

const Container = styled.div`
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 34px;
  display: flex;
  align-items: center;
  position: absolute;
  background-color: #18181b;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Button = styled.a<ButtonProps>`
  display: flex;
  padding: 7px;
  ${({ active }) => active && 'background: rgba(255, 255, 255, 0.15)'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: #fff;
  opacity: 0.2;
`;

export const GlobalToolbar = React.memo(({ editor, ...props }: GlobalToolbarProps) => {
  const [formats, setFormats] = React.useState<InlineAttributes>({});
  const [blockType, setBlockType] = React.useState<BlockType>();
  const [isDisplay, setDisplay] = React.useState(false);

  const formatBlock = React.useCallback(
    (type: BlockType, attributes: BlockAttributes = {}, childBlocks: Block[] = []) => {
      editor.getModule('toolbar').setUpdating(true);
      const selectedBlocks = editor.getModule('selector').getSelectedBlocks();
      if (selectedBlocks.length > 0) {
        const updateIds = selectedBlocks.map((v) => {
          return v.id;
        });
        editor
          .getModule('toolbar')
          .formatMultiBlocks(
            updateIds,
            blockType !== type ? type : 'PARAGRAPH',
            attributes,
            childBlocks,
          );
        editor.getModule('clipboard').focus();
      } else {
        editor
          .getModule('toolbar')
          .formatBlock(blockType !== type ? type : 'PARAGRAPH', attributes, childBlocks);
      }

      setTimeout(() => {
        editor.getModule('toolbar').setUpdating(false);
      }, 100);
    },
    [formats, blockType],
  );

  const handleHeader1 = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('HEADER1');
    },
    [formats, blockType],
  );
  const handleHeader2 = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('HEADER2');
    },
    [formats, blockType],
  );
  const handleHeader3 = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('HEADER3');
    },
    [formats, blockType],
  );

  const handleCodeBlock = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('CODE-BLOCK');
    },
    [formats, blockType],
  );

  const handleDecision = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('DECISION');
    },
    [formats, blockType],
  );

  const handleTask = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('TASK');
    },
    [formats, blockType],
  );

  const handleBlockquote = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('BLOCKQUOTE');
    },
    [formats, blockType],
  );

  const handleOrderedList = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('ORDERED-LIST');
    },
    [formats, blockType],
  );

  const handleBulletList = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      formatBlock('BULLET-LIST');
    },
    [formats, blockType],
  );

  const handleTable = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      const caretPosition = editor.getCaretPosition();
      if (!caretPosition) return;
      const parentBlock = editor.getModule('editor').createBlock({
        prevId: caretPosition.blockId,
        type: 'TABLE',
        attributes: { tableC: 2, tableR: 2 },
        focus: false,
        historyPush: true,
      });
      editor.createChildBlocks(parentBlock.id, [
        { ...createBlock('PARAGRAPH'), name: 'r0-c0' },
        { ...createBlock('PARAGRAPH'), name: 'r0-c1' },
        { ...createBlock('PARAGRAPH'), name: 'r1-c0' },
        { ...createBlock('PARAGRAPH'), name: 'r1-c1' },
      ]);
    },
    [formats, blockType],
  );

  const handleFileUpload = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      const caretPosition = editor.getCaretPosition();
      if (!caretPosition) return;

      const fileHolder = document.createElement('input');
      fileHolder.setAttribute('type', 'file');
      fileHolder.setAttribute('accept', '*');
      fileHolder.setAttribute('style', 'visibility:hidden');

      fileHolder.onchange = () => {
        editor
          .getModule('uploader')
          .upload(Array.from(fileHolder.files ?? []), caretPosition.blockId);
      };
      fileHolder.click();

      document.body.appendChild(fileHolder);
      setTimeout(() => {
        document.body.removeChild(fileHolder);
      }, 10);
    },
    [formats, blockType, editor],
  );

  React.useEffect(() => {
    const subs = new Subscription();
    const eventEmitter = editor.getEventEmitter();

    subs.add(
      eventEmitter
        .select(EditorEvents.EVENT_SELECTION_CHANGE)
        .pipe(combineLatestWith(eventEmitter.select(EditorEvents.EVENT_BLOCK_SELECTED)))
        .subscribe((v) => {
          if (editor.getModule('toolbar').getUpdating()) return;
          const caret = editor.getCaretPosition();
          const selectedBlocks = editor.getModule('selector').getSelectedBlocks();
          if (selectedBlocks.length < 1 && (!caret || !editor.hasFocus())) {
            setDisplay(false);
            return;
          }
          setDisplay(true);
          if (!caret) return;
          const targetBlock = editor.getBlock(caret.blockId);
          if (!targetBlock) return;
          // setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));

          setBlockType(targetBlock.type);
        }),
    );
    return () => {
      subs.unsubscribe();
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      {isDisplay && (
        <Container {...props}>
          <Tooltip
            targetElement={
              <Button href="#" onClick={handleHeader1} active={blockType === 'HEADER1'}>
                <FormatHeader1 size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            見出し(大)に切り替える
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" onClick={handleHeader2} active={blockType === 'HEADER2'}>
                <FormatHeader2 size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            見出し(中)に切り替える
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" onClick={handleHeader3} active={blockType === 'HEADER3'}>
                <FormatHeader3 size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            見出し(小)に切り替える
          </Tooltip>

          <Divider />
          <Tooltip
            targetElement={
              <Button href="#" active={blockType === 'CODE-BLOCK'} onClick={handleCodeBlock}>
                <FormatCodeBlock size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            コードブロックに切り替える
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" active={blockType === 'BLOCKQUOTE'} onClick={handleBlockquote}>
                <FormatBlockQuote size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            引用ブロックに切り替える
          </Tooltip>

          <Divider />
          <Tooltip
            targetElement={
              <Button href="#" active={blockType === 'BULLET-LIST'} onClick={handleBulletList}>
                <FormatBulletList size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            箇条書きに切り替える
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" active={blockType === 'ORDERED-LIST'} onClick={handleOrderedList}>
                <FormatNumberList size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            番号付きリストに切り替える
          </Tooltip>

          <Divider />

          <Tooltip
            targetElement={
              <Button href="#" active={blockType === 'TASK'} onClick={handleTask}>
                <FormatTask size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            タスクに切り替える
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" active={blockType === 'DECISION'} onClick={handleDecision}>
                <FormatDecision size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            決定事項に切り替える
          </Tooltip>
          <Divider />
          <Tooltip
            targetElement={
              <Button href="#" active={false} onClick={handleFileUpload}>
                <FormatAttachment size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            ファイルを添付
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" active={blockType === 'TABLE'} onClick={handleTable}>
                <FormatDecision size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            テーブルを追加
          </Tooltip>
        </Container>
      )}
    </>,
    document.body,
  );
});
