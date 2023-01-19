import * as React from 'react';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { EditorEvents } from '../constants';
import { EditorController } from '../types/editor';
import { User } from '../modules/collaborator';
import { getBlockElementById } from '../utils/block';
import { getHtmlElement } from '../utils/dom';

export interface CollaboratorProps {
  editor: EditorController;
}

const Container = styled.div`
  position: absolute;
  top: 8px;
  left: -30px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 100%;
  box-shadow: 0px 1px 5px 0px;
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
  font-size: 22px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Collaborators = React.memo(({ editor }: CollaboratorProps) => {
  const [collaborators, setCollaborators] = React.useState<(User & { top?: number })[]>([]);
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
    return collaborators.map((v) => {
      if (!v.blockId) return v;
      const blockEl = getBlockElementById(v.blockId);
      const containerEl = getHtmlElement(editor.getSettings().scrollContainer);
      const options = editor.getModule('collaborator').getOptions();
      if (!blockEl) return v;
      const containerScrollTop = containerEl ? containerEl.scrollTop : 0;
      const containerRect = containerEl?.getBoundingClientRect();
      const rect = blockEl.getBoundingClientRect();
      return {
        ...v,
        top: containerScrollTop + rect.top - (containerRect?.top ?? 0) - (options.marginTop ?? 0),
      };
    });
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
              <img
                draggable="false"
                src={collaborator?.imageUrl}
                //src="https://lh3.googleusercontent.com/a-/AAuE7mDqNcnkUNpr7-X6WOAp4QaSI399ToQaP38tSD5x=s100"
              />
            ) : (
              <Text>{collaborator.name.slice(0, 1)}</Text>
            )}
          </Container>
        );
      })}
    </>
  );
});
