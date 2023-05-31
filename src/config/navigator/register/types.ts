import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RegisterStackParamList = {
  welcome: undefined;
  signIn: undefined;
  firstAccess: undefined;
  forgotPassword: undefined;
};

export type RegisterStackNavigationProps = NativeStackNavigationProp<RegisterStackParamList>;
