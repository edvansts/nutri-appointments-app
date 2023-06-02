import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useTokenStore } from '../../store/token';
import { useUserStore } from '../../store/user';
import { RegisterStackNavigator } from './register';
import { ROLE } from '../../constants/user';
import { NutritionistStackNavigator } from './nutritonist';
import { PatientStackNavigator } from './patient';

const RootNavigator = () => {
  const { token } = useTokenStore();
  const { user } = useUserStore();

  const isNutrionist = user?.role === ROLE.NUTRITIONIST;

  return (
    <NavigationContainer>
      {token && (user != null) ? (
        isNutrionist ? (
          <NutritionistStackNavigator />
        ) : (
          <PatientStackNavigator />
        )
      ) : (
        <RegisterStackNavigator />
      )}
    </NavigationContainer>
  );
};

export { RootNavigator };
