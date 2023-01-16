import * as React from 'react';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { EditorEvents } from '../constants';
import { EditorController } from '../types/editor';
import { User } from '../modules/collaborator';

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
  const [collaborators, setCollaborators] = React.useState<User[]>([]);
  React.useEffect(() => {
    const subs = new Subscription();
    const eventEmitter = editor.getEventEmitter();
    subs.add(
      eventEmitter.select(EditorEvents.EVENT_COLLABORATOR_UPDATE_POSITION).subscribe((user) => {
        setCollaborators((prev) => {
          const index = prev.findIndex((v) => v.id === user.id);
          if (index === -1) {
            return [...prev, user];
          }
          prev[index] = user;
          return prev;
        });
      }),
    );
    return () => {
      subs.unsubscribe();
    };
  }, []);

  return (
    <>
      <Container draggable="false">
        <Text>T</Text>
      </Container>
      {collaborators.map((collaborator) => {
        <Container draggable="false">
          <img
            draggable="false"
            src={collaborator?.imageUrl}
            //src="https://lh3.googleusercontent.com/a-/AAuE7mDqNcnkUNpr7-X6WOAp4QaSI399ToQaP38tSD5x=s100"
          />
        </Container>;
      })}
    </>
  );
});
