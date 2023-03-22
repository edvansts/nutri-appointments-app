import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { NutritionistStackParamList } from './types';

const Stack = createNativeStackNavigator<NutritionistStackParamList>();

const NutritionistStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="feed" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feed" component={null} />
    </Stack.Navigator>
  );
};

export { NutritionistStackNavigator };
