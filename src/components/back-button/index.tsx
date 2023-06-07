import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton, type IconButtonProps } from 'react-native-paper';
import type { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import { colors } from '../../styles/theme';

interface BackButtonProps {
  icon?: IconSource;
  iconColor?: string;
  backgroundColor?: string;
  style?: IconButtonProps['style'];
}

function BackButton({
  icon = 'arrow-left',
  iconColor = colors.white,
  backgroundColor = colors.greenDarker,
  style,
}: BackButtonProps) {
  const navigation = useNavigation();

  const handleBackNavigation = () => {
    if (!navigation.canGoBack()) {
      return;
    }

    navigation.goBack();
  };

  return (
    <IconButton
      icon={icon}
      iconColor={iconColor}
      style={style}
      containerColor={backgroundColor}
      onPress={handleBackNavigation}
    />
  );
}

export { BackButton };
