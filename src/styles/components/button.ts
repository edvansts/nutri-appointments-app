import styled from 'styled-components/native';

import { Button as PaperButton } from 'react-native-paper';
import { colors } from '../theme';

type ButtonType = 'primary' | 'secondary' | 'transparent';

const BUTTON_TYPES_BACKGROUND: Record<ButtonType, string> = {
  primary: colors.primary,
  secondary: colors.secondary,
  transparent: 'transparent',
};

const BUTTON_TYPES_COLOR: Record<ButtonType, string> = {
  primary: colors.white,
  secondary: colors.white,
  transparent: colors.greenDarker,
};

export const Button = styled(PaperButton)<{
  margin?: string | number;
  mb?: string | number;
  type?: ButtonType;
}>`
  background-color: ${({ type = 'primary' }) => BUTTON_TYPES_BACKGROUND[type]};
  color: ${({ type = 'primary' }) => BUTTON_TYPES_COLOR[type]};
  margin: ${({ margin = '0px' }) => margin};
  margin-bottom: ${({ mb = '0px' }) => mb};
`;
