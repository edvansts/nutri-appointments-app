import React from 'react';
import { ActionButton, ActionButtonContent, NutritionistActionsContainer } from './styles';
import { Text } from '@styles/components/text';
// import { useTokenStore } from '@store/token';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NutritionistActions = () => {
  // const { setToken } = useTokenStore();

  const { colors } = useAppTheme();

  return (
    <NutritionistActionsContainer>
      {/* <Text
        onPress={() => {
          setToken('');
        }}
      >
        Nutritionist Home
      </Text> */}

      <ActionButton>
        <ActionButtonContent>
          <Text variant="bodyMedium" style={{ color: colors.white }}>
            Cadastrar Paciente
          </Text>
          <MaterialIcons color={colors.white} name="person-add-alt" size={24} />
        </ActionButtonContent>
      </ActionButton>

      <ActionButton backgroundColor={colors.greenLighter}>
        <ActionButtonContent>
          <Text variant="bodyMedium" fontWeight="500" style={{ color: colors.greenDarker }}>
            Agendar nova consulta
          </Text>
          <MaterialCommunityIcons color={colors.greenDarker} name="calendar-plus" size={24} />
        </ActionButtonContent>
      </ActionButton>
    </NutritionistActionsContainer>
  );
};

export { NutritionistActions };
