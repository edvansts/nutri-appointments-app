import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const PatientCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-radius: 12px;
  background-color: ${colors.grayLighter};
  align-items: flex-start;
  padding: 8px;
`;

export const PatientInfo = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`;
