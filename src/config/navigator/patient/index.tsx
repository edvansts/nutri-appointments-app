import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { PatientStackParamList } from './types';
import { Feed } from '../../../features/patient/feed';

const Stack = createNativeStackNavigator<PatientStackParamList>();

const PatientStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="feed" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feed" component={Feed} />
    </Stack.Navigator>
  );
};

export { PatientStackNavigator };
