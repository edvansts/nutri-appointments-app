import { Text } from 'react-native-paper';
import styled from 'styled-components/native';
import { colors } from '../theme';

interface LinkProps {
  padding?: string;
}

export const Link = styled(Text)<LinkProps>`
  font-weight: bold;
  color: ${colors.gray100};
  padding: ${({ padding = '10px 0px' }) => padding};
`;
