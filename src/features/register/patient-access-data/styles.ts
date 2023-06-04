import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.grayLighter};
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 32px;
  height: 70%;
`;
