import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import type { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import { colors } from '../../../../styles/theme';

interface BackButtonProps {
  icon?: IconSource;
  iconColor?: string;
  backgroundColor?: string;
}

function BackButton({
  icon = 'arrow-left',
  iconColor = colors.white,
  backgroundColor = colors.greenDarker,
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
      style={{
        borderRadius: 48 / 2,
        backgroundColor,
        width: 48,
        height: 48,
        marginTop: 16,
      }}
      onPress={handleBackNavigation}
    />
  );
}

export { BackButton };
