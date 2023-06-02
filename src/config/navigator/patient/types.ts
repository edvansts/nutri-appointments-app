import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export interface PatientStackParamList {
  feed: NavigatorScreenParams<any>;
}

export type PatientStackNavigationProps = NativeStackNavigationProp<PatientStackParamList>;

export type PatientRouteProps<RouteName extends keyof PatientStackParamList> = RouteProp<
  PatientStackParamList,
  RouteName
>;
