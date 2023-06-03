import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RegisterStackParamList } from './types';
import { FirstAccess } from '@features/first-access';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { Welcome } from '@features/register/welcome';
import { NutritionistAccessType } from '@features/register/nutritionist-access-type';
import { BackButton } from '@components/back-button';
import { NutritionistAccessData } from '@features/register/nutritionist-access-data';
import { NutritionistDataConfirmation } from '@features/register/nutritionist-data-confirmation';

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
        name="nutritionistDataConfirmation"
        component={NutritionistDataConfirmation}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="nutritionistAccessData"
        component={NutritionistAccessData}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
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
