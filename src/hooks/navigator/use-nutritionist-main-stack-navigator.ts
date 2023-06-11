import { useNavigation } from '@react-navigation/native';
import { type NutritionistMainStackNavigationProps } from '@routes/nutritionist/types';

const useNutritionistMainNavigator = () => {
  return useNavigation<NutritionistMainStackNavigationProps>();
};

export { useNutritionistMainNavigator };
