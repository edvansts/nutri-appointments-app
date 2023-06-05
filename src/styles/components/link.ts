import { Text } from 'react-native-paper';
import styled from 'styled-components/native';
import { colors } from '../theme';
import { type TypeTextAlign } from 'src/types/theme';

interface LinkProps {
  padding?: string | number;
  margin?: string | number;
  textAlign?: TypeTextAlign;
}

export const Link = styled(Text)<LinkProps>`
  color: ${colors.greenDarker};
  padding: ${({ padding = 0 }) => padding};
  margin: ${({ margin = 0 }) => margin};
  text-align: ${({ textAlign = 'auto' }) => textAlign};
`;
