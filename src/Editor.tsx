import * as React from 'react';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { Block } from './types/block';
import { Header, Text } from './components/blocks';
// import { createBlock } from './utils/block';
import { EventEmitter } from './utils/event-emitter';
import { useModule } from './modules/use-module';
import { KeyBoardModule } from './modules/keyboard';

interface Props {
  readOnly?: boolean;
}

interface Formats {
  [key: string]: React.FC<{ block: Block }>;
}

interface BlockProps {
  block: Block;
  formats: Formats;
}

const BlockContainer: React.VFC<BlockProps> = React.memo(
  ({ block, formats }) => {
    let Container;
    if (!formats[block.type.toLocaleLowerCase()]) {
      Container = formats['text'];
    } else {
      Container = formats['header'];
    }

    return <Container block={block}></Container>;
  },
);

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 12px;
  padding: 12px;
  min-height: 300px;
`;

const eventEmitter = new EventEmitter();

export const Editor: React.VFC<Props> = React.memo(
  ({ readOnly = false }: Props) => {
    const containerRef = React.useRef(null);
    const [modules, moduleController] = useModule({ eventEmitter });
    const [blocks] = React.useState<Block[]>([]);
    const [formats] = React.useState<Formats>({
      text: Text,
      header: Header,
    });

    const handleBeforeInput = React.useCallback(() => {}, []);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
        if (
          modules['keyboard'] &&
          modules['keyboard'] instanceof KeyBoardModule
        ) {
          modules['keyboard'].onKeyDown(event);
        }
      },
      [modules],
    );

    const handleClick = React.useCallback(() => {
      const selection = document.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        console.log(
          'click',
          range.commonAncestorContainer === containerRef.current,
        );
      }
    }, []);

    // const handleCreateBlock = React.useCallback(() => {
    //   setBlocks((prevBlocks) => {
    //     return [...prevBlocks, createBlock('TEXT')];
    //   });
    // }, []);

    React.useEffect(() => {
      console.log(modules);

      const subs = new Subscription();
      subs.add(
        eventEmitter.on('test').subscribe((res) => {
          console.log('test', res);
        }),
      );

      moduleController.addModule<KeyBoardModule>('keyboard', KeyBoardModule);

      return () => {
        subs.unsubscribe();
        moduleController.removeAll();
      };
    }, []);

    return (
      <Container
        ref={containerRef}
        contentEditable={!readOnly}
        onBeforeInput={handleBeforeInput}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        suppressContentEditableWarning={true}
      >
        {blocks.map((block, index) => {
          return <BlockContainer key={index} formats={formats} block={block} />;
        })}
      </Container>
    );
  },
);
