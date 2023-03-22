import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export type NutritionistStackParamList = {
  feed: NavigatorScreenParams<any>;
};

export type NutritionistStackNavigationProps =
  NativeStackNavigationProp<NutritionistStackParamList>;

export type NutritionistRouteProps<RouteName extends keyof NutritionistStackParamList> = RouteProp<
  NutritionistStackParamList,
  RouteName
>;
