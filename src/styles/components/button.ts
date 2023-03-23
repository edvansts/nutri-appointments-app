import styled from 'styled-components/native';

import { Button as PaperButton } from 'react-native-paper';

export const Button = styled(PaperButton)<{ margin: string | number }>`
  padding: 10px;
  background-color: blue;
  color: white;
  margin: ${({ margin = undefined }) => margin};
`;
