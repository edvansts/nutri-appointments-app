import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { type NutritionistTabsParamsList } from './tabs/types';

export type NutritionistMainStackParamList = {
  tabs: NavigatorScreenParams<NutritionistTabsParamsList>;
  patientDetails: { patientId: string };
  addPatient: undefined;
  addClinicalEvaluation: { patientId: string };
};

export type NutritionistMainStackNavigationProps =
  NativeStackNavigationProp<NutritionistMainStackParamList>;

export type NutritionistMainRouteProps<RouteName extends keyof NutritionistMainStackParamList> =
  RouteProp<NutritionistMainStackParamList, RouteName>;
