import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const NutritioninalDataContainer = styled.View`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NutritionalDataCardsList = styled.View`
  display: flex;
  flex-direction: row;
  row-gap: 24px;
  column-gap: 12px;
  flex-wrap: wrap;
`;

export const NutritionalDataCard = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  gap: 8px;
  min-width: 156px;
  width: auto;
  flex: 1;
  background-color: ${colors.grayLighter};
  border-radius: 12px;
  height: 136px;
`;
