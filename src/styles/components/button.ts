import styled from 'styled-components/native';

import { Button as PaperButton } from 'react-native-paper';
import { colors } from '../theme';

export const Button = styled(PaperButton)<{
  margin?: string | number;
  secondary?: boolean;
}>`
  background-color: ${({ secondary = false }) => (secondary ? colors.secondary : colors.primary)};
  color: white;
  margin: ${({ margin = '0px' }) => margin};
`;
