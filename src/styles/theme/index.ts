import { DefaultTheme } from 'react-native-paper';

const colors = {
  ...DefaultTheme.colors,
  primary: '#A3D663',
  secondary: '#FF3131',
  tertiary: '#B9B9BD',
  green100: '#A3F87E',
  green200: '#66AF46',
  red100: '#FA5A5A',
  red200: '#D63030',
  gray100: '#807A9E',
  background: '#FFFFFF',
};

export type AppTheme = typeof theme;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors,
};

export { theme, colors };
