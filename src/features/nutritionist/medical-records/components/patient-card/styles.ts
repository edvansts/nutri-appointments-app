import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const PatientCardContainer = styled.TouchableOpacity`
  border-radius: 12px;
  background-color: ${colors.grayLighter};
  padding: 8px;
`;

export const PatientInfo = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`;

export const MainInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`;
export const AdditionalInfo = styled.View`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  margin-top: 4px;
`;
