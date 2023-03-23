import { useNavigation } from '@react-navigation/native';
import { RegisterStackNavigationProps } from '../../config/navigator/register/types';

const useRegisterStackNavigator = () => {
  return useNavigation<RegisterStackNavigationProps>();
};

export { useRegisterStackNavigator };
