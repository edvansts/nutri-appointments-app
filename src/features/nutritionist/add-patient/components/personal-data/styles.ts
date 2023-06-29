import { colors } from '@styles/theme';
import { FAB } from 'react-native-paper';
import styled from 'styled-components/native';

export const PersonalDataContainer = styled.ScrollView``;

export const SubmitButton = styled(FAB)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: ${colors.greenDarker};
  align-items: center;
  justify-content: center;
  border-radius: ${48 / 2}px;
  width: 48px;
  height: 48px;
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
