import { useNavigation } from '@react-navigation/native';
import { NutritionistFirstAccessStackNavigationProps } from './types';

const useNutritionistFirstAccessNavigation = () => {
  return useNavigation<NutritionistFirstAccessStackNavigationProps>();
};

export { useNutritionistFirstAccessNavigation };
