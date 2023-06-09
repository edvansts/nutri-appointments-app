import React from 'react';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { ActivityIndicator } from 'react-native-paper';

const Loader = () => {
  const { colors } = useAppTheme();

  return <ActivityIndicator color={colors.greenDark} />;
};

export { Loader };
