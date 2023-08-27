import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../../types/editor';
import { InlineContainer } from '../../inlines/Container';
import { Formats } from '../../../types/format';
import { Block, Inline } from '../../../types';
import { createBlock, getBlockElementById } from '../../../utils/block';
import { useChildBlockRenderer } from '../../../hooks';

export interface TableProps {
  blockId: string;
  formats: Formats;
  contents: React.ReactNode;
  scrollContainer?: HTMLElement | string;
  attributes: {
    tableR: number;
    tableC: number;
    tableSettings: {
      [key: string]: any;
    };
  };
  childBlocks: Block[];
  editor: EditorController;
}

export interface TableCellProps {
  parentBlockId: string;
  blockId: string;
  formats: Formats;
  scrollContainer?: HTMLElement | string;
  editor: EditorController;
}

const Container = styled.div`
  outline: none;
  display: flex;
  margin: 0;
  padding: 12px 0;
  justify-content: center;
`;

const StyledTable = styled.table`
  border: 1px solid #c1c7cd;
  border-spacing: 0;
  border-collapse: collapse;
`;

const StyledTr = styled.tr``;

const StyledTd = styled.td`
  border: 1px solid #c1c7cd;
  border-inline-end-width: 0;
  border-bottom-width: 0;
  vertical-align: top;
  background-clip: padding-box;
  position: relative;
  user-drag: none;
`;

const TableContent = styled.div`
  outline: none;
  padding: 8px;
`;

const Resizer = styled.div`
  position: absolute;
  width: 5px;
  top: 0;
  right: -2px;
  height: 100%;
  z-index: 1;
  transition: background 150ms ease 50ms;
  cursor: col-resize;
  user-drag: none;
`;

export const Table = React.memo(
  ({
    blockId,
    contents,
    formats,
    attributes: { tableR, tableC, tableSettings = {} },
    childBlocks = [],
    scrollContainer,
    editor,
    ...props
  }: TableProps) => {
    const tableRef = React.useRef<HTMLTableElement>(null);
    const [hoverResizeCol, setHoverResizeCol] = React.useState<number>();
    const [dragParams, setDragParams] = React.useState<{
      col: number;
      left: number;
      width: number;
    }>();

    const handleInput = React.useCallback(
      (e: React.FormEvent) => {
        e.stopPropagation();
        const keyboard = editor.getModule('keyboard');
        if (keyboard) {
          keyboard.onInputChildBlock(blockId, e);
        }
      },
      [blockId],
    );

    const handleResizeMouseOver = React.useCallback(
      (col: number) => (e: React.FormEvent) => {
        setHoverResizeCol(col);
      },
      [],
    );
    const handleResizeMouseLeave = React.useCallback((e: React.FormEvent) => {
      setHoverResizeCol(undefined);
    }, []);
    const handleMouseDown = React.useCallback(
      (col: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const block = childBlocks.find((v) => v.name === `r0-c${col}`);
        if (!block) return;
        const el = getBlockElementById(block.id, true);
        if (!el) return;
        setDragParams({ col, left: e.clientX, width: el.clientWidth });
      },
      [tableSettings],
    );

    const memoTableRows: Block[][] = React.useMemo(() => {
      if (!tableR || !tableC) return [];
      let margedRows: Block[][] = [];
      for (let r = 0; r < tableR; r++) {
        margedRows[r] = [];
        for (let c = 0; c < tableC; c++) {
          const cellBlock = childBlocks.find((v) => v?.name === `r${r}-c${c}`);
          margedRows[r][c] = cellBlock ?? createBlock('PARAGRAPH');
        }
      }
      return margedRows;
    }, [childBlocks, tableR, tableC]);

    const memoTableWidths = React.useMemo(() => {
      let widths: number[] = [];
      for (let c = 0; c < tableC; c++) {
        widths[c] = Object.prototype.hasOwnProperty.call(tableSettings, `c${c}-width`)
          ? tableSettings[`c${c}-width`]
          : null;
      }

      return widths;
    }, [tableSettings]);

    const memoContents = React.useMemo(() => {
      return (
        <tbody>
          {memoTableRows?.map((row, rIndex) => {
            return (
              <StyledTr key={rIndex}>
                {row.map((column, cIndex) => {
                  return (
                    <StyledTd
                      key={cIndex}
                      style={{
                        minWidth: memoTableWidths[cIndex] ?? 120,
                        width: memoTableWidths[cIndex] ?? 'auto',
                      }}
                    >
                      <TableCell
                        formats={formats}
                        editor={editor}
                        scrollContainer={scrollContainer}
                        parentBlockId={blockId}
                        blockId={memoTableRows[rIndex][cIndex].id}
                      />
                      <Resizer
                        style={{
                          backgroundColor:
                            cIndex === hoverResizeCol || cIndex === dragParams?.col
                              ? 'red'
                              : 'transparent',
                        }}
                        onMouseOver={handleResizeMouseOver(cIndex)}
                        onMouseLeave={handleResizeMouseLeave}
                        onMouseDown={handleMouseDown(cIndex)}
                        draggable="false"
                      />
                    </StyledTd>
                  );
                })}
              </StyledTr>
            );
          })}
        </tbody>
      );
    }, [
      memoTableRows,
      memoTableWidths,
      formats,
      scrollContainer,
      editor,
      hoverResizeCol,
      dragParams,
    ]);

    React.useEffect(() => {
      if (!editor || !dragParams) return;

      const handleMouseMove = (e: MouseEvent) => {
        let width = 0;
        if (e.clientX > dragParams.left) {
          width = dragParams.width + (e.clientX - dragParams.left);
        } else {
          width = dragParams.width - (dragParams.left - e.clientX);
        }
        if (width < 100) {
          width = 100;
        }

        const block = childBlocks.find((v) => v.name === `r0-c${dragParams.col}`);
        if (!block) return;
        const el = getBlockElementById(block.id, true);
        if (!el) return;
        el.style.width = `${width}px`;
      };

      const handleMouseUp = (e: MouseEvent) => {
        setDragParams(undefined);
        // const currentBlock = editor.getBlock(blockId);
        // if (!currentBlock) return;
        // editor.updateBlock({
        //   ...currentBlock,
        //   attributes: {
        //     ...currentBlock.attributes,
        //     width: imageRef.current.width,
        //   },
        // });
        // editor.render([blockId]);
      };

      window.addEventListener('mousemove', handleMouseMove, true);
      window.addEventListener('mouseup', handleMouseUp, true);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove, true);
        window.removeEventListener('mouseup', handleMouseUp, true);
      };
    }, [dragParams, childBlocks]);

    return (
      <Container {...props} contentEditable={false} draggable="false" onBeforeInput={handleInput}>
        <StyledTable ref={tableRef}>{memoContents}</StyledTable>
      </Container>
    );
  },
);

export const TableCell = React.memo(
  ({ parentBlockId, blockId, formats, scrollContainer, editor }: TableCellProps) => {
    const block = useChildBlockRenderer({ parentBlockId, blockId, editor });

    const memoContent = React.useMemo(() => {
      return (
        <TableContent
          suppressContentEditableWarning
          contentEditable={true}
          data-child-block-id={block?.id}
        >
          {InlineContainer({
            contents: block?.contents ?? [],
            formats,
            editor,
            scrollContainer,
          })}
        </TableContent>
      );
    }, [block?.id, block?.contents, editor, scrollContainer]);

    return <>{memoContent}</>;
  },
);
