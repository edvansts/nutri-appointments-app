import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { PatientStackParamList } from './types';

const Stack = createNativeStackNavigator<PatientStackParamList>();

const PatientStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="feed" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feed" component={null} />
    </Stack.Navigator>
  );
};

export { PatientStackNavigator };
