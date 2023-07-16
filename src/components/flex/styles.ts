import styled from 'styled-components/native';

export interface FlexViewProps {
  flexDirection?: 'column' | 'row';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  gap?: number;
}

export const FlexView = styled.View<FlexViewProps>`
  display: flex;
  flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  gap: ${({ gap = 0 }) => `${gap}px`};
`;
