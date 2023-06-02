import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NutritionistFirstAccessStackParamList } from './types';
import { BackButton } from '../../components/back-button';
import { DataConfirmation } from '../../../../features/register/nutritionist-first-access/data-confirmation';
import { AccessData } from '../../../../features/register/nutritionist-first-access/access-data';

const Stack = createNativeStackNavigator<NutritionistFirstAccessStackParamList>();

const NutritionistFirstAccess = () => {
  return (
    <Stack.Navigator initialRouteName="dataConfirmation">
      <Stack.Screen
        name="dataConfirmation"
        component={DataConfirmation}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="accessData"
        component={AccessData}
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

export { NutritionistFirstAccess };
