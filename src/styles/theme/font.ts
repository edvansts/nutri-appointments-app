export type TypeFontWeight =
  | 'bold'
  | 'normal'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export enum FONT_FAMILIES {
  'Inter-Light' = 'Inter-Light',
  'Inter-Thin' = 'Inter-Thin',
  Inter = 'Inter',
  'Inter-Medium' = 'Inter-Medium',
  'Inter-SemiBold' = 'Inter-SemiBold',
  'Inter-Bold' = 'Inter-Bold',
  'Inter-ExtraBold' = 'Inter-ExtraBold',
}

export const FONT_FAMILIES_BY_WEIGHT: Record<TypeFontWeight, FONT_FAMILIES> = {
  '100': FONT_FAMILIES['Inter-Light'],
  '200': FONT_FAMILIES['Inter-Light'],
  '300': FONT_FAMILIES['Inter-Thin'],
  '400': FONT_FAMILIES.Inter,
  '500': FONT_FAMILIES['Inter-Medium'],
  '600': FONT_FAMILIES['Inter-SemiBold'],
  '700': FONT_FAMILIES['Inter-Bold'],
  '800': FONT_FAMILIES['Inter-ExtraBold'],
  '900': FONT_FAMILIES['Inter-ExtraBold'],
  bold: FONT_FAMILIES['Inter-Bold'],
  normal: FONT_FAMILIES.Inter,
};
