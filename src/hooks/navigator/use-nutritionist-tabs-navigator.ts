import { useNavigation } from '@react-navigation/native';
import { type NutritionistTabsNavigationProps } from '@routes/nutritionist/types';

const useNutritionistTabsNavigator = () => {
  return useNavigation<NutritionistTabsNavigationProps>();
};

export { useNutritionistTabsNavigator };
