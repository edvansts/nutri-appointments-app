import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RegisterStackParamList } from './types';
import { FirstAccess } from '@features/first-access';
import { Welcome } from '@features/register/welcome';
import { NutritionistAccessType } from '@features/register/nutritionist-access-type';
import { BackButton } from '@components/back-button';
import { NutritionistAccessData } from '@features/register/nutritionist-access-data';
import { NutritionistDataConfirmation } from '@features/register/nutritionist-data-confirmation';
import { PatientAccessType } from '@features/register/patient-access-type';
import { PatientDataConfirmation } from '@features/register/patient-data-confirmation';
import { PatientAccessData } from '@features/register/patient-access-data';
import { SignIn } from '@features/register/sign-in';

const Stack = createNativeStackNavigator<RegisterStackParamList>();

const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerTransparent: true,
        headerLeft: () => <BackButton />,
      }}
    >
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen
        name="forgotPassword"
        component={FirstAccess}
        options={{ title: 'Esqueci a senha' }}
      />
      <Stack.Screen name="signIn" component={SignIn} />

      <Stack.Screen name="nutritionistAccessType" component={NutritionistAccessType} />
      <Stack.Screen name="nutritionistDataConfirmation" component={NutritionistDataConfirmation} />
      <Stack.Screen name="nutritionistAccessData" component={NutritionistAccessData} />

      <Stack.Screen name="patientAccessType" component={PatientAccessType} />
      <Stack.Screen name="patientDataConfirmation" component={PatientDataConfirmation} />
      <Stack.Screen name="patientAccessData" component={PatientAccessData} />
    </Stack.Navigator>
  );
};

export { RegisterStackNavigator };
