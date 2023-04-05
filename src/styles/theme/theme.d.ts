import { AppTheme, theme } from './';

declare global {
  namespace ReactNativePaper {
    type ThemeColors = AppTheme['colors'];
  }
}
