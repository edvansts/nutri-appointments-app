import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useTokenStore } from '@store/token';
import { RegisterStackNavigator } from './register';
import { ROLE } from '@constants/user';
import { NutritionistTabsNavigator } from './nutritionist';
import { PatientStackNavigator } from './patient';
import { useGetUserInfo } from 'src/api/get-user-info';
import { LoadingScreen } from '@components/loading-screen';

interface RootNavigatorProps {
  onReady?: () => void;
}

const RootNavigator = ({ onReady }: RootNavigatorProps) => {
  const { token } = useTokenStore();

  const hasToken = !!token;

  const { data: user, isLoading } = useGetUserInfo({
    enabled: hasToken,
  });

  const isNutrionist = user?.role === ROLE.NUTRITIONIST;

  if (isLoading && hasToken) {
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
