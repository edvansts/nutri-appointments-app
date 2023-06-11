import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const PatientDetailsContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${colors.background};
  padding: 36px 16px 24px;
`;

export const PatientInfoTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
`;
