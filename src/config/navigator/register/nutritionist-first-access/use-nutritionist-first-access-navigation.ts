import { useNavigation } from '@react-navigation/native';
import { type NutritionistFirstAccessStackNavigationProps } from './types';

const useNutritionistFirstAccessNavigation = () => {
  return useNavigation<NutritionistFirstAccessStackNavigationProps>();
};

export { useNutritionistFirstAccessNavigation };
