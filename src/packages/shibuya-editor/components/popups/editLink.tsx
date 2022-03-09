import * as React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import { getScrollContainer } from '../../utils/dom';

interface Props {
  text: string;
  currentLink: string;
  scrollContainer?: HTMLElement | string;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

const Container = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button:first-child {
    margin-right: 8px;
  }
`;

export const EditLinkPopup = React.memo(
  ({ text, currentLink, scrollContainer, onClickEdit, onClickDelete, ...props }: Props) => {
    const [link, setLink] = React.useState('');

    return ReactDOM.createPortal(
      <Container {...props}>
        <div>{text}</div>
        <a href={currentLink}>http://{currentLink}</a>
        <ButtonContainer>
          <button onClick={onClickEdit}>編集</button>
          <button onClick={onClickDelete}>削除する</button>
        </ButtonContainer>
      </Container>,
      getScrollContainer(scrollContainer) ?? document.body,
    );
  },
);
