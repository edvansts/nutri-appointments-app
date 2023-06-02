import styled from 'styled-components/native';
import { colors } from '../../../../styles/theme';

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.grayLighter};
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  min-height: 160px;
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 16px;
`;
