import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RegisterStackParamList = {
  welcome: undefined;
  signIn: undefined;
  firstAccess: undefined;
  forgotPassword: undefined;

  nutritionistAccessType: undefined;
  nutritionistDataConfirmation: undefined;
  nutritionistAccessData: undefined;
}

export type RegisterStackNavigationProps = NativeStackNavigationProp<RegisterStackParamList>;
