import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { NutritionistMainStackParamList } from './types';
import { PatientDetails } from '@features/nutritionist/patient-details';
import { NutritionistTabsNavigator } from './tabs';
import { BackButton } from '@components/back-button';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { Text } from '@styles/components/text';
import { AddPatient } from '@features/nutritionist/add-patient';

const Stack = createNativeStackNavigator<NutritionistMainStackParamList>();

const NutritionistMainStackNavigator = () => {
  const { colors } = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="tabs"
      screenOptions={{
        headerShown: true,
        headerTitle: ({ children }) => (
          <Text style={{ marginLeft: 12 }} variant="headlineSmall" color={colors.white}>
            {children}
          </Text>
        ),
        headerStyle: { backgroundColor: colors.greenDarker },
        headerLeft: (props) => <BackButton style={{ marginLeft: -12, height: 38, width: 38 }} />,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="tabs"
        component={NutritionistTabsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="patientDetails"
        component={PatientDetails}
        options={{
          title: 'Detalhes do paciente',
        }}
      />
      <Stack.Screen
        name="addPatient"
        component={AddPatient}
        options={{
          title: 'Cadastrar Paciente',
        }}
      />
    </Stack.Navigator>
  );
};

export { NutritionistMainStackNavigator };
