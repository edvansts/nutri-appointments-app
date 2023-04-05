import { useTheme } from 'react-native-paper';
import { AppTheme } from '../../styles/theme';

export const useAppTheme = () => useTheme<AppTheme>();
