import * as React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import { getScrollContainer } from '../../utils/dom';

interface Props {
  currentText: string;
  currentLink: string;
  scrollContainer?: HTMLElement | string;
  onCancel: () => void;
  onSave: (text: string, link: string) => void;
}

const Container = styled.div``;

const Label = styled.div`
  margin-bottom: 4px;
`;

const InputContainer = styled.div`
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button:first-child {
    margin-right: 8px;
  }
`;

export const EditTextLinkPopup = React.memo(
  ({ currentText, currentLink, scrollContainer, onCancel, onSave, ...props }: Props) => {
    const [display, setDisplay] = React.useState({ text: currentText, link: currentLink });

    const handleChangeLink = (
      type: 'text' | 'link',
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setDisplay((prev) => {
        return { ...prev, [type]: event.target.value };
      });
    };

    return ReactDOM.createPortal(
      <Container {...props}>
        <InputContainer>
          <Label>テキスト</Label>
          <input
            type="text"
            value={display.text}
            onChange={(e) => {
              console.log(e.target);
              handleChangeLink('text', e);
            }}
          />
        </InputContainer>
        <InputContainer>
          <Label>リンク</Label>
          <input type="text" value={display.link} onChange={(e) => handleChangeLink('link', e)} />
        </InputContainer>
        <ButtonContainer>
          <button onClick={onCancel}>キャンセル</button>
          <button onClick={() => onSave(display.text, display.link)}>保存する</button>
        </ButtonContainer>
      </Container>,
      getScrollContainer(scrollContainer) ?? document.body,
    );
  },
);
