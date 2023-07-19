import styled from 'styled-components/native';

export interface FlexViewProps {
  flexDirection?: 'column' | 'row';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  gap?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export const FlexView = styled.View<FlexViewProps>`
  display: flex;
  flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  gap: ${({ gap = 0 }) => `${gap}px`};
  padding: ${({ padding = 0, paddingVertical = 0, paddingHorizontal = 0 }) => {
    if (paddingVertical && paddingHorizontal) {
      return `${paddingVertical} ${paddingHorizontal}`;
    }

    if (paddingVertical) {
      return `${paddingVertical}px 0px`;
    }

    if (paddingHorizontal) {
      return `0px ${paddingHorizontal}px`;
    }

    return `${padding}px`;
  }};
`;
