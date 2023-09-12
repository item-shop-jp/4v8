import * as React from 'react';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { debounce } from 'throttle-debounce';
import { EditorEvents } from '../constants';
import { EditorController } from '../types/editor';
import { CollaboratingMember } from '../modules/collaborator';
import { getBlockElementById } from '../utils/block';
import { getHtmlElement } from '../utils/dom';

export interface CollaboratorProps {
  editor: EditorController;
}

interface ICollaboratingMember extends CollaboratingMember {
  top?: number;
}

const Container = styled.div`
  position: absolute;
  top: 8px;
  left: -24px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 100%;
  box-shadow: 0px 1px 5px 0px;
  background-color: #fff;
  cursor: auto;
  overflow: hidden;
  transition: top 0.3s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  font-size: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Collaborators = React.memo(({ editor }: CollaboratorProps) => {
  const [collaborators, setCollaborators] = React.useState<ICollaboratingMember[]>([]);
  React.useEffect(() => {
    const subs = new Subscription();
    const eventEmitter = editor.getEventEmitter();
    subs.add(
      eventEmitter.select(EditorEvents.EVENT_COLLABORATOR_UPDATE_POSITION).subscribe((user) => {
        setCollaborators((prev) => {
          if (user.blockId === null) {
            return prev.filter((v) => v.id !== user.id);
          }
          const index = prev.findIndex((v) => v.id === user.id);
          if (index === -1) {
            return [...prev, user];
          }
          prev[index] = user;
          return [...prev];
        });
      }),
    );
    const debouncedUpdate = debounce(200, () => {
      setCollaborators((prev) => {
        return [...prev];
      });
    });
    subs.add(
      eventEmitter.select(EditorEvents.EVENT_EDITOR_HISTORY_PUSH).subscribe(() => {
        debouncedUpdate();
      }),
    );
    subs.add(
      eventEmitter.select(EditorEvents.EVENT_COLLABORATOR_REMOVE_ALL).subscribe(() => {
        setCollaborators([]);
      }),
    );
    return () => {
      subs.unsubscribe();
    };
  }, []);

  const memoCollaborators = React.useMemo(() => {
    return collaborators.reduce<ICollaboratingMember[]>((r, v) => {
      if (!v.blockId) return r;
      const blockEl = getBlockElementById(v.blockId);
      const containerEl = getHtmlElement(editor.getSettings().scrollContainer);
      const options = editor.getModule('collaborator').getOptions();
      if (!blockEl) return r;
      const containerScrollTop = containerEl ? containerEl.scrollTop : 0;
      const containerRect = containerEl?.getBoundingClientRect();
      const rect = blockEl.getBoundingClientRect();

      // １行以上の要素は気持ちパディングを取る
      const paddingTop = parseInt(
        window.getComputedStyle(blockEl).getPropertyValue('padding-top'),
        10,
      );

      let top =
        containerScrollTop +
        rect.top -
        (containerRect?.top ?? 0) -
        (options.marginTop ?? 0) +
        (paddingTop > 4 ? paddingTop : 0);
      // 複数人が同じ場所をフォーカスしている場合
      if (r.find((x) => x.top === top)) {
        top = top + 16;
      }
      return [
        ...r,
        {
          ...v,
          top,
        },
      ];
    }, []);
  }, [collaborators]);

  return (
    <>
      {memoCollaborators.map((collaborator) => {
        return (
          <Container
            key={collaborator.id}
            draggable="false"
            style={{ top: `${collaborator?.top ?? 0}px` }}
          >
            {collaborator?.imageUrl ? (
              <img draggable="false" src={collaborator?.imageUrl} />
            ) : (
              <Text>{collaborator.name.slice(0, 1).toUpperCase()}</Text>
            )}
          </Container>
        );
      })}
    </>
  );
});
