import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const AddPatientContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.background};
  flex-grow: 1;
`;
