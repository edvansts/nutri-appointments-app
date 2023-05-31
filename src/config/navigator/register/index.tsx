import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../../../screens/sign-in';
import type { RegisterStackParamList } from './types';
import { FirstAccess } from '../../../screens/first-access';
import { useTheme } from 'react-native-paper';
import { useAppTheme } from '../../../hooks/theme/use-app-theme';
import { Welcome } from '../../../screens/welcome';

const Stack = createNativeStackNavigator<RegisterStackParamList>();

const RegisterStackNavigator = () => {
  const { colors } = useAppTheme();

  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="signIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen
        name="forgotPassword"
        component={FirstAccess}
        options={{ title: 'Esqueci a senha' }}
      />
      <Stack.Screen
        name="firstAccess"
        component={FirstAccess}
        options={{
          title: 'Primeiro acesso',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.grayDark,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export { RegisterStackNavigator };
