import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

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

const XFadeIn = keyframes`
  0% {
    opacity: 0.7;
    transform: translateX(-50%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`;

const XFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
  }
`;

const YFadeIn = keyframes`
  0% {
    opacity: 0.7;
    transform: translateY(-50%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
`;

const YFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 0;
    transform: translateY(-50%) scale(0.5);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%) scale(0.5);
  }
`;

const TooltipContainer = styled.div<TooltipProps>`
  position: absolute;
  border-radius: 4px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: none;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  padding: 8px 12px;
  width: max-content;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  opacity: ${({ isDisplay }) => (isDisplay ? 1 : 0)};
  .description {
    color: #ccc;
    font-size: 10px;
  }
  ${({ containerRect, position, theme, isDisplay }) => {
    if (!containerRect) return;
    switch (position) {
      case 'top':
        return css`
          bottom: ${containerRect.height + 8}px;
          transform: ${isDisplay ? `translateX(-50%) scale(1)` : `translateX(-50%) scale(0.5)`};
          animation: ${isDisplay ? XFadeIn : XFadeOut} 0.25s;
          left: 50%;
          padding: 10px;
        `;
      case 'right':
        return css`
          left: ${containerRect.width + 16}px;
          top: 50%;
          animation: ${isDisplay ? YFadeIn : YFadeOut} 0.25s;
          transform: ${isDisplay ? `translateY(-50%) scale(1)` : `translateY(-50%) scale(0.5)`};
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
            border-right-color: rgba(0, 0, 0, 0.8);
            right: 100%;
            top: 50%;
          }
        `;
      case 'bottom':
        return css`
          top: ${containerRect.height + 16}px;
          transform: ${isDisplay ? `translateX(-50%) scale(1)` : `translateX(-50%) scale(0.5)`};
          left: 50%;
          animation: ${isDisplay ? XFadeIn : XFadeOut} 0.25s;
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
  const [_isDisplay, _setDisplay] = React.useState(false);
  const [displayTimer, setDisplayTimer] = React.useState<number>(); // Tooltipの消滅時のアニメーション用
  const [containerRect, setContainerRect] = React.useState<DOMRect>();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseOver = React.useCallback(() => {
    _setDisplay(true);
  }, []);

  const handleMouseOut = React.useCallback(() => {
    _setDisplay(false);
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;
    if (displayTimer) {
      clearTimeout(displayTimer);
    }
    if (!_isDisplay) {
      setDisplayTimer(window.setTimeout(() => setDisplay(false), 300));
    } else {
      setContainerRect(containerRef.current.getBoundingClientRect());
      setDisplay(true);
    }
  }, [_isDisplay]);

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
          isDisplay={_isDisplay}
        >
          {children}
        </TooltipContainer>
      )}
    </Container>
  );
};
