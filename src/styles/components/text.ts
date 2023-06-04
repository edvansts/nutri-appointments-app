import styled from 'styled-components/native';
import { Text as PaperText } from 'react-native-paper';
import { FONT_FAMILIES_BY_WEIGHT, type TypeFontWeight } from '@styles/theme/font';

export const Text = styled(PaperText)<{
  fontWeight?: TypeFontWeight;
}>`
  ${({ fontWeight }) =>
    fontWeight
      ? `
   font-weight: ${fontWeight};
   font-family: ${FONT_FAMILIES_BY_WEIGHT[fontWeight]};
  `
      : ''}
`;
