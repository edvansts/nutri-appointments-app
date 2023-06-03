import { type RouteProp } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RegisterStackParamList = {
  welcome: undefined;

  firstAccess: undefined;
  forgotPassword: undefined;

  nutritionistAccessType: undefined;
  nutritionistDataConfirmation: undefined;
  nutritionistAccessData: {
    name: string;
    birthdayDate: string;
    crn: string;
  };

  nutritionistSignIn: undefined;
};

export type RegisterStackNavigationProps = NativeStackNavigationProp<RegisterStackParamList>;

export type RegisterRouteProps<RouteName extends keyof RegisterStackParamList> = RouteProp<
  RegisterStackParamList,
  RouteName
>;
