import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const MainActionsContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ActionButton = styled.TouchableOpacity<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor = colors.greenDarker }) => backgroundColor};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  border-radius: 12px;
  padding: 8px 32px;
`;

export const ActionButtonContent = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
