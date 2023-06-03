import { type RouteProp } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RegisterStackParamList = {
  welcome: undefined;

  forgotPassword: undefined;
  signIn: {
    signInType: 'NUTRITIONIST' | 'PATIENT';
  };

  nutritionistAccessType: undefined;
  nutritionistDataConfirmation: undefined;
  nutritionistAccessData: {
    name: string;
    birthdayDate: string;
    crn: string;
  };

  patientAccessType: undefined;
  patientDataConfirmation: undefined;
  patientAccessData: {
    name: string;
    birthdayDate: string;
    cpf: string;
  };
};

export type RegisterStackNavigationProps = NativeStackNavigationProp<RegisterStackParamList>;

export type RegisterRouteProps<RouteName extends keyof RegisterStackParamList> = RouteProp<
  RegisterStackParamList,
  RouteName
>;
