import { IconButton } from 'react-native-paper';
import styled from 'styled-components/native';

export const PersonalDataContainer = styled.View``;

export const SubmitButton = styled(IconButton)<{ isDirty: boolean }>`
  ${({ isDirty }) =>
    isDirty
      ? `
      position: absolute;
      right: 20px
      bottom: 20px;
      `
      : `margin-left: auto;`}
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
