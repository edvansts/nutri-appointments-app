import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { LoadingScreenContainer } from './styles';
import { useAppTheme } from '@hooks/theme/use-app-theme';

const LoadingScreen = () => {
  const { colors } = useAppTheme();

  return (
    <LoadingScreenContainer>
      <ActivityIndicator color={colors.white} size="large" />
    </LoadingScreenContainer>
  );
};

export { LoadingScreen };
