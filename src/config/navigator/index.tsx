import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useTokenStore } from '../../store/token';
import { useUserStore } from '../../store/user';
import { RegisterStackNavigator } from './register';

const RootNavigator = () => {
  const { token } = useTokenStore();
  const { user } = useUserStore();

  return (
    <NavigationContainer>{token && user ? null : <RegisterStackNavigator />}</NavigationContainer>
  );
};

export { RootNavigator };
