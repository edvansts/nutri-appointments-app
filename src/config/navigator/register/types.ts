import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface RegisterStackParamList {
  welcome: undefined;
  nutritionistAccessType: undefined;
  nutritionistFirstAccess: undefined;
  signIn: undefined;
  firstAccess: undefined;
  forgotPassword: undefined;
}

export type RegisterStackNavigationProps = NativeStackNavigationProp<RegisterStackParamList>;
