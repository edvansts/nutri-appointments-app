import { useTheme } from 'react-native-paper';
import { type AppTheme } from '../../styles/theme';

export const useAppTheme = () => useTheme<AppTheme>();
