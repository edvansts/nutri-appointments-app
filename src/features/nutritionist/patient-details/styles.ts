import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const PatientDetailsContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.background};
  flex-grow: 1;
`;

export const LoadingContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const PatientInfoTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
`;
