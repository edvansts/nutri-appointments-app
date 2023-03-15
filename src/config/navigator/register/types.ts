import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RegisterStackParamList = {
  signIn: undefined;
  register: undefined;
};

export type RegisterStackNavigationProps =
  NativeStackNavigationProp<RegisterStackParamList>;
