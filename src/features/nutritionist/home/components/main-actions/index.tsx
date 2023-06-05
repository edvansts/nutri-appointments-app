import React from 'react';
import { ActionButton, ActionButtonContent, MainActionsContainer } from './styles';
import { Text } from '@styles/components/text';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainActions = () => {
  const { colors } = useAppTheme();

  return (
    <MainActionsContainer>
      <ActionButton activeOpacity={0.7}>
        <ActionButtonContent>
          <Text variant="bodyMedium" style={{ color: colors.white }}>
            Cadastrar Paciente
          </Text>
          <MaterialIcons color={colors.white} name="person-add-alt" size={24} />
        </ActionButtonContent>
      </ActionButton>

      <ActionButton backgroundColor={colors.greenLighter} activeOpacity={0.7}>
        <ActionButtonContent>
          <Text variant="bodyMedium" fontWeight="500" style={{ color: colors.greenDarker }}>
            Agendar nova consulta
          </Text>
          <MaterialCommunityIcons color={colors.greenDarker} name="calendar-plus" size={24} />
        </ActionButtonContent>
      </ActionButton>
    </MainActionsContainer>
  );
};

export { MainActions };
