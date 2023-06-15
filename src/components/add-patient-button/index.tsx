import { useNutritionistMainNavigator } from '@hooks/navigator/use-nutritionist-main-stack-navigator';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import React from 'react';
import { IconButton } from 'react-native-paper';

function AddPatientButton() {
  const navigation = useNutritionistMainNavigator();

  const { colors } = useAppTheme();

  return (
    <IconButton
      onPress={() => {
        navigation.navigate('addPatient');
      }}
      icon="account-plus-outline"
      iconColor={colors.white}
    />
  );
}

export { AddPatientButton };
