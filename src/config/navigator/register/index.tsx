import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RegisterStackParamList } from './types';
import { FirstAccess } from '../../../features/first-access';
import { useAppTheme } from '../../../hooks/theme/use-app-theme';
import { Welcome } from '../../../features/register/welcome';
import { NutritionistFirstAccess } from './nutritionist-first-access';
import { NutritionistAccessType } from '../../../features/register/nutritionist-access-type';

const Stack = createNativeStackNavigator<RegisterStackParamList>();

const RegisterStackNavigator = () => {
  const { colors } = useAppTheme();

  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen
        name="nutritionistAccessType"
        component={NutritionistAccessType}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="nutritionistFirstAccess"
        component={NutritionistFirstAccess}
        options={{ headerShown: false }}
      />
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
