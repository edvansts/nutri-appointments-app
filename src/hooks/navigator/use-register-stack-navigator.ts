import { useNavigation } from '@react-navigation/native';
import { type RegisterStackNavigationProps } from '../../routes/register/types';

const useRegisterStackNavigator = () => {
  return useNavigation<RegisterStackNavigationProps>();
};

export { useRegisterStackNavigator };
