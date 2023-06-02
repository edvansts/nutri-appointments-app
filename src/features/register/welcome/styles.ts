import styled from 'styled-components/native';
import { colors } from '../../../styles/theme';
import { Container } from '../../../styles/components/container';

export const WelcomeView = styled.View`
  display: flex;
  background-color: ${colors.background};
  margin: 24px 16px 16px;
  flex-direction: column;
`;

export const WelcomeInfo = styled.View`
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
`;

export const WelcomeContainer = styled(Container)``;
