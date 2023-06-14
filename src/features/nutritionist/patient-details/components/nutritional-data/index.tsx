import React from 'react';
import {
  NutritionalDataCard,
  NutritionalDataCardsList,
  NutritioninalDataContainer,
} from './styles';
import { Text } from '@styles/components/text';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NutritionIcon from '@assets/icon/nutrition.svg';
import PrescriptionsIcon from '@assets/icon/prescriptions.svg';
import BodyFatIcon from '@assets/icon/body_fat.svg';

const NutritionalData = () => {
  const { colors } = useAppTheme();

  return (
    <NutritioninalDataContainer>
      <Text variant="titleMedium" fontWeight="600" style={{ marginTop: 24 }}>
        Avaliação Nutricional
      </Text>

      <NutritionalDataCardsList>
        <NutritionalDataCard activeOpacity={0.75}>
          <FontAwesome
            name="stethoscope"
            size={40}
            color={colors.greenDarker}
            style={{ marginBottom: 16 }}
          />

          <Text variant="bodySmall" textAlign="center" color={colors.grayDark}>
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

          <Text variant="bodySmall" textAlign="center" color={colors.grayDark}>
            Exame Físico
          </Text>
        </NutritionalDataCard>

        <NutritionalDataCard activeOpacity={0.75}>
          <NutritionIcon color={colors.greenDarker} style={{ marginBottom: 16 }} />

          <Text variant="bodySmall" textAlign="center" color={colors.grayDark}>
            Dados de Consumo Alimentar
          </Text>
        </NutritionalDataCard>

        <NutritionalDataCard activeOpacity={0.75}>
          <PrescriptionsIcon color={colors.greenDarker} style={{ marginBottom: 16 }} />

          <Text variant="bodySmall" textAlign="center" color={colors.grayDark}>
            Diagnóstico Nutricional
          </Text>
        </NutritionalDataCard>

        <NutritionalDataCard activeOpacity={0.75}>
          <BodyFatIcon color={colors.greenDarker} style={{ marginBottom: 16 }} />
          <Text variant="bodySmall" textAlign="center" color={colors.grayDark}>
            Avaliação Antropométrica
          </Text>
        </NutritionalDataCard>

        <NutritionalDataCard activeOpacity={0.75}>
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={40}
            color={colors.greenDarker}
            style={{ marginBottom: 16 }}
          />

          <Text variant="bodySmall" textAlign="center" color={colors.grayDark}>
            Consultas
          </Text>
        </NutritionalDataCard>
      </NutritionalDataCardsList>
    </NutritioninalDataContainer>
  );
};

export { NutritionalData };
