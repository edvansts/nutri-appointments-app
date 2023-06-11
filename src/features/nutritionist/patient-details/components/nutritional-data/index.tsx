import React from 'react';
import {
  NutritionalDataCard,
  NutritionalDataCardsList,
  NutritioninalDataContainer,
} from './styles';
import { Text } from '@styles/components/text';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NutritionalData = () => {
  const { colors } = useAppTheme();

  return (
    <NutritioninalDataContainer>
      <Text variant="titleMedium" fontWeight="600" style={{ marginTop: 24 }}>
        Avaliação Nutricional
      </Text>

      <NutritionalDataCardsList>
        <NutritionalDataCard activeOpacity={0.75}>
          <Text variant="bodySmall" color={colors.grayDark}>
            Dados clínicos e ambientais
          </Text>
        </NutritionalDataCard>
        <NutritionalDataCard activeOpacity={0.75}>
          <MaterialIcons
            name="directions-run"
            size={40}
            color={colors.greenDarker}
            style={{ marginBottom: 16 }}
          />

          <Text variant="bodySmall" color={colors.grayDark}>
            Exame Físico
          </Text>
        </NutritionalDataCard>
        <NutritionalDataCard activeOpacity={0.75}>
          <Text variant="bodySmall" color={colors.grayDark}>
            Dados de Consumo Alimentar
          </Text>
        </NutritionalDataCard>
        <NutritionalDataCard activeOpacity={0.75}>
          <Text variant="bodySmall" color={colors.grayDark}>
            Diagnóstico Nutricional
          </Text>
        </NutritionalDataCard>
        <NutritionalDataCard activeOpacity={0.75}>
          <Text variant="bodySmall" color={colors.grayDark}>
            Avaliação Antropométrica
          </Text>
        </NutritionalDataCard>
        <NutritionalDataCard activeOpacity={0.75}>
          <Text variant="bodySmall" color={colors.grayDark}>
            Consultas
          </Text>
        </NutritionalDataCard>
      </NutritionalDataCardsList>
    </NutritioninalDataContainer>
  );
};

export { NutritionalData };
