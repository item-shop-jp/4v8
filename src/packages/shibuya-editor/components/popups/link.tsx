import * as React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import { getScrollContainer } from '../../utils/dom';

interface Props {
  scrollContainer?: HTMLElement | string;
  onLinkSave: (link: string, event: React.MouseEvent) => void;
}

const Container = styled.div`
  display: flex;
`;

const Info = styled.div`
  margin-right: 8px;
`;

const Button = styled.button`
  margin-left: 16px;
`;

export const LinkPopup = React.memo(({ scrollContainer, onLinkSave, ...props }: Props) => {
  const [link, setLink] = React.useState('');

  const handleChangeLink = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLink(event.target.value);
    },
    [link],
  );
  return ReactDOM.createPortal(
    <Container {...props}>
      <Info>Enter link:</Info>
      <input value={link} onChange={handleChangeLink} />
      <Button onClick={(event) => onLinkSave(link, event)}>save</Button>
    </Container>,
    getScrollContainer(scrollContainer) ?? document.body,
  );
});
