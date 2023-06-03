import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { NutritionistStackParamList } from './types';
import { Feed } from '@features/nutritionist/feed';

const Stack = createNativeStackNavigator<NutritionistStackParamList>();

const NutritionistStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="feed" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feed" component={Feed} />
    </Stack.Navigator>
  );
};

export { NutritionistStackNavigator };
