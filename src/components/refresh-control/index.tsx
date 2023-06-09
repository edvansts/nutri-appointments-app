import React from 'react';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { RefreshControlProps, RefreshControl as RefreshControlNative } from 'react-native';

const RefreshControl = (props: RefreshControlProps) => {
  const { colors } = useAppTheme();

  return <RefreshControlNative colors={[colors.greenDarker]} {...props} />;
};

export { RefreshControl };
