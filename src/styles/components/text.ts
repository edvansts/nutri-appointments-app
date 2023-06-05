import styled from 'styled-components/native';
import { Text as PaperText } from 'react-native-paper';
import { FONT_FAMILIES_BY_WEIGHT, type TypeFontWeight } from '@styles/theme/font';
import { type TypeTextAlign } from 'src/types/theme';

export const Text = styled(PaperText)<{
  fontWeight?: TypeFontWeight;
  color?: string;
  textAlign?: TypeTextAlign;
}>`
  ${({ color }) => (color ? `color: ${color};` : '')}
  ${({ fontWeight }) =>
    fontWeight
      ? `
   font-weight: ${fontWeight};
   font-family: ${FONT_FAMILIES_BY_WEIGHT[fontWeight]};
  `
      : ''}

    ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : '')}
`;
