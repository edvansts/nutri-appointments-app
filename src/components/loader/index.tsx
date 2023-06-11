import React from 'react';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { ActivityIndicator, type ActivityIndicatorProps } from 'react-native-paper';

interface LoaderProps extends ActivityIndicatorProps {}

const Loader = (props: LoaderProps) => {
  const { colors } = useAppTheme();

  return <ActivityIndicator color={colors.greenDark} {...props} />;
};

export { Loader };
