import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const NutritionistActionsContainer = styled.View`
  background-color: ${colors.white};

  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 0px;
  gap: 8px;
`;

export const ActionButton = styled.Pressable<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor = colors.greenDarker }) => backgroundColor};
  height: 80px;
  width: 100%;
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
