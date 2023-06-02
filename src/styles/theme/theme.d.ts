import { type AppTheme } from './';

declare global {
  namespace ReactNativePaper {
    type ThemeColors = AppTheme['colors'];
  }
}
