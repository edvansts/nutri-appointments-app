import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const MedicalRecordsContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.background};
  padding: 24px 16px;
`;

export const PatientsList = styled.FlatList`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
