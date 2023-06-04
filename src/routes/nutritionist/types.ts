import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';

export type NutritionistTabsParamsList = {
  home: undefined;
  appointments: undefined;
  medicalRecords: undefined;
  profile: undefined;
};

export type NutritionistTabsNavigationProps = BottomTabNavigationProp<NutritionistTabsParamsList>;

export type NutritionistRouteProps<RouteName extends keyof NutritionistTabsParamsList> = RouteProp<
  NutritionistTabsParamsList,
  RouteName
>;
