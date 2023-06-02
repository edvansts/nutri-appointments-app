import { DefaultTheme, configureFonts } from 'react-native-paper';
import { type MD3Type, type MD3TypescaleKey } from 'react-native-paper/lib/typescript/src/types';

const colors = {
  ...DefaultTheme.colors,
  primary: '#406D2C',
  secondary: '#FF3131',
  tertiary: '#B9B9BD',
  green100: '#A3F87E',
  green200: '#66AF46',
  red100: '#FA5A5A',
  red200: '#D63030',

  grayDark: '#434343',
  grayLight: '#D9D9D9',
  grayLighter: '#F1F1F1',

  background: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',

  purplePure: '#807A9E',
  purpleLight: '#B9B8BD',

  redPure: '#FF3131',
  redDark: '#D63030',
  redLight: '#FA5A5A',

  greenPure: '#A3D663',
  greenDarker: '#406D2C',
  greenDark: '#66AF46',
  greenLight: '#A3F876',
  greenLighter: '#DEFDCE',
};

const _fontConfig: Record<MD3TypescaleKey, MD3Type> = {
  displaySmall: {
    fontFamily: 'Inter',
    fontSize: 36,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 44,
  },
  displayMedium: {
    fontFamily: 'Inter',
    fontSize: 45,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 52,
  },
  displayLarge: {
    fontFamily: 'Inter',
    fontSize: 57,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 64,
  },

  headlineSmall: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 32,
  },

  headlineMedium: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 36,
  },

  headlineLarge: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 40,
  },

  titleSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
    lineHeight: 20,
  },

  titleMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.15,
    lineHeight: 24,
  },

  titleLarge: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 28,
  },

  labelSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 16,
  },

  labelMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 16,
  },

  labelLarge: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
    lineHeight: 20,
  },

  bodySmall: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.4,
    lineHeight: 16,
  },

  bodyMedium: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.25,
    lineHeight: 20,
  },

  bodyLarge: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.15,
    lineHeight: 24,
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: _fontConfig, isV3: true }),
  roundness: 2,
  colors,
};

export type AppTheme = typeof theme;

export { theme, colors };
