import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  targetElement: React.ReactElement;
  maxWidth?: number;
  border?: number;
  position?: 'top' | 'top-left' | 'top-right' | 'left' | 'right' | 'bottom';
  fontSize?: number;
  fontWeight?: string | number;
}

interface TooltipProps {
  maxWidth: number;
  containerRect?: DOMRect;
  position: 'top' | 'top-left' | 'top-right' | 'left' | 'right' | 'bottom';
  border: number;
  fontSize: number;
  fontWeight: string | number;
  isDisplay: boolean;
}

const Container = styled.div`
  display: flex;
  position: relative;
  user-select: none;
`;

const TooltipContainer = styled.div<TooltipProps>`
  position: absolute;
  border-radius: 4px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  padding: 10% 20%;
  width: max-content;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  opacity: ${({ isDisplay }) => (isDisplay ? 1 : 0)};
  ${({ containerRect, position, theme }) => {
    if (!containerRect) return;
    switch (position) {
      case 'top':
        return `
        bottom: ${containerRect.height + 8}px;
        transform: translateX(-50%);
        left: 50%;
        padding: 10px;
      `;
      case 'top-left':
        return `
        bottom: ${containerRect.height + 8}px;
        right: -10px;
        padding: 10px;
      `;
      case 'top-right':
        return `
        bottom: ${containerRect.height + 8}px;
        left: -10px;
        padding: 10px;
      `;
      case 'left':
        return `right: ${containerRect.width + 16}px;`;
      case 'right':
        return `
        left: ${containerRect.width + 16}px;
        top: 50%;
        transform: translateY(-50%);
        &:before {
          border: solid transparent;
          content: '';
          height: 0;
          width: 0;
          pointer-events: none;
          position: absolute;
          border-top-width: 5px;
          border-bottom-width: 5px;
          border-left-width: 5px;
          border-right-width: 5px;
          margin-top: -5px;
          border-right-color: ${theme.tooltip.background};
          right: 100%;
          top: 50%;
        }
      `;
      case 'bottom':
        return `
        top: ${containerRect.height + 16}px;
        transform: translateX(-50%);
        left: 50%;
      `;
      default:
        return ``;
    }
  }}
`;

export const Tooltip: React.FC<Props> = ({
  targetElement,
  children,
  maxWidth = 160,
  border = 0,
  fontSize = 13,
  fontWeight = 'normal',
  position = 'top',
  ...props
}) => {
  const [isDisplay, setDisplay] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const [timer, setTimer] = React.useState<number>();
  const [containerRect, setContainerRect] = React.useState<DOMRect>();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseOver = React.useCallback(() => {
    setIsHidden(true);
  }, []);

  const handleMouseOut = React.useCallback(() => {
    setIsHidden(false);
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;
    setContainerRect(containerRef.current.getBoundingClientRect());
  }, [containerRef]);

  React.useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (!isHidden) {
      setTimer(window.setTimeout(() => setDisplay(isHidden), 300));
    } else {
      setDisplay(isHidden);
    }
  }, [isHidden]);

  return (
    <Container
      ref={containerRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    >
      {targetElement}
      {isDisplay && (
        <TooltipContainer
          containerRect={containerRect}
          maxWidth={maxWidth}
          position={position}
          border={border}
          fontWeight={fontWeight}
          fontSize={fontSize}
          isDisplay={isHidden}
        >
          {children}
        </TooltipContainer>
      )}
    </Container>
  );
};
