import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RegisterStackNavigator } from './register';
import { ROLE } from '@constants/user';
import { NutritionistTabsNavigator } from './nutritionist';
import { PatientStackNavigator } from './patient';
import { LoadingScreen } from '@components/loading-screen';
import { useUserInfo } from '@hooks/user/use-user-info';

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
          <NutritionistTabsNavigator />
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
