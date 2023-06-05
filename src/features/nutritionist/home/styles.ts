import { colors } from '@styles/theme';
import styled from 'styled-components/native';

export const HomeContent = styled.View`
  background-color: ${colors.white};
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px 16px 0px;
  gap: 38px;
`;

export const HomeView = styled.ScrollView`
  background-color: ${colors.grayLighter};
`;
