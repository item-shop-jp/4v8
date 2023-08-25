import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../../types/editor';
import { InlineContainer } from '../../inlines/Container';
import { Formats } from '../../../types/format';
import { Block, Inline } from '../../../types';
import { createBlock } from '../../../utils/block';
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
`;

const TableContent = styled.div`
  outline: none;
  padding: 8px;
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
      let widths: { min: number; max: number }[] = [];
      for (let c = 0; c < tableC; c++) {
        widths[c] = Object.prototype.hasOwnProperty.call(tableSettings, `c${c}-width`)
          ? tableSettings[`c${c}-width`]
          : { min: 120, max: 240 };
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
                        minWidth: memoTableWidths[cIndex]?.min ?? 120,
                        maxWidth: memoTableWidths[cIndex]?.max ?? 240,
                      }}
                    >
                      <TableCell
                        formats={formats}
                        editor={editor}
                        scrollContainer={scrollContainer}
                        parentBlockId={blockId}
                        blockId={memoTableRows[rIndex][cIndex].id}
                      />
                    </StyledTd>
                  );
                })}
              </StyledTr>
            );
          })}
        </tbody>
      );
    }, [memoTableRows, formats, scrollContainer, editor]);

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
