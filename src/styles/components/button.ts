import styled from 'styled-components/native';

import { Button as PaperButton } from 'react-native-paper';
import { colors } from '../theme';

type ButtonType = 'primary' | 'secondary' | 'transparent';
type SizeType = 'md' | 'lg' | 'sm';

const BUTTON_TYPES_BACKGROUND: Record<ButtonType, string> = {
  primary: colors.primary,
  secondary: colors.white,
  transparent: 'transparent',
};

const BUTTON_TYPES_COLOR: Record<ButtonType, string> = {
  primary: colors.white,
  secondary: colors.greenDarker,
  transparent: colors.greenDarker,
};

const SIZE_TYPES_RECORD: Record<SizeType, string> = {
  lg: '48px',
  md: '40px',
  sm: '32px',
};
export const Button = styled(PaperButton)<{
  margin?: string | number;
  mb?: string | number;
  mt?: string | number;
  type?: ButtonType;
  size?: SizeType;
  width?: string | number;
  height?: string | number;
}>`
  background-color: ${({ type = 'primary' }) => BUTTON_TYPES_BACKGROUND[type]};
  color: ${({ type = 'primary' }) => BUTTON_TYPES_COLOR[type]};
  ${({ mt }) => (mt ? `margin: ${mt}` : '')};
  ${({ margin }) => (margin ? `margin: ${margin}` : '')};
  ${({ mb }) => (mb ? `margin: ${mb}` : '')};
  height: ${({ size = 'md', height }) => height || SIZE_TYPES_RECORD[size]};
  width: ${({ width = 'auto' }) => width};

  ${({ type = 'primary' }) =>
    type === 'secondary' ? `border: 1px solid ${colors.greenDarker}` : ''}
`;
