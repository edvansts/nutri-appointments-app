import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RegisterStackParamList } from './types';
import { FirstAccess } from '@features/first-access';
import { Welcome } from '@features/register/welcome';
import { NutritionistAccessType } from '@features/register/nutritionist-access-type';
import { BackButton } from '@components/back-button';
import { NutritionistAccessData } from '@features/register/nutritionist-access-data';
import { NutritionistDataConfirmation } from '@features/register/nutritionist-data-confirmation';
import { SignIn } from '@features/sign-in';
import { PatientAccessType } from '@features/register/patient-access-type';
import { PatientDataConfirmation } from '@features/register/patient-data-confirmation';

const Stack = createNativeStackNavigator<RegisterStackParamList>();

const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen
        name="forgotPassword"
        component={FirstAccess}
        options={{ title: 'Esqueci a senha' }}
      />

      <Stack.Screen
        name="nutritionistAccessType"
        component={NutritionistAccessType}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
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
        name="nutritionistSignIn"
        component={SignIn}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
      />

      <Stack.Screen
        name="patientAccessType"
        component={PatientAccessType}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="patientDataConfirmation"
        component={PatientDataConfirmation}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="patientAccessData"
        component={NutritionistAccessData}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
      />

      <Stack.Screen
        name="patientSignIn"
        component={SignIn}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack.Navigator>
  );
};

export { RegisterStackNavigator };
