import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RegisterStackNavigator } from './register';
import { ROLE } from '@constants/user';
import { PatientStackNavigator } from './patient';
import { LoadingScreen } from '@components/loading-screen';
import { useUserInfo } from '@hooks/user/use-user-info';
import { NutritionistMainStackNavigator } from './nutritionist';
import { useSetupPushNotifications } from '@hooks/user/use-setup-push-notifications';

interface RootNavigatorProps {
  onReady?: () => void;
}

const RootNavigator = ({ onReady }: RootNavigatorProps) => {
  const { user, isLoading, hasToken } = useUserInfo();

  const { setup } = useSetupPushNotifications();

  const isNutrionist = user?.role === ROLE.NUTRITIONIST;

  useEffect(() => {
    if (user && hasToken) {
      setup();
    }
  }, [user]);

  if (isLoading && hasToken) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer onReady={onReady}>
      {user && hasToken ? (
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
