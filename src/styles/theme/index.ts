import { DefaultTheme } from 'react-native-paper';

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

export type AppTheme = typeof theme;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors,
};

export { theme, colors };
