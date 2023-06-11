import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RegisterStackNavigator } from './register';
import { ROLE } from '@constants/user';
import { PatientStackNavigator } from './patient';
import { LoadingScreen } from '@components/loading-screen';
import { useUserInfo } from '@hooks/user/use-user-info';
import { NutritionistMainStackNavigator } from './nutritionist';

interface RootNavigatorProps {
  onReady?: () => void;
}

const RootNavigator = ({ onReady }: RootNavigatorProps) => {
  const { user, isLoading } = useUserInfo();

  const isNutrionist = user?.role === ROLE.NUTRITIONIST;

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer onReady={onReady}>
      {user ? (
        isNutrionist ? (
          <NutritionistMainStackNavigator />
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
