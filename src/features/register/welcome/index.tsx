import { View } from 'react-native';
import React from 'react';
import { Container } from '../../../styles/components/container';
import { CachedImage } from '../../../components/cached-image';
import { useRegisterStackNavigator } from '../../../hooks/navigator/use-register-stack-navigator';
import { Text, Title, useTheme } from 'react-native-paper';
import { WelcomeContainer, WelcomeInfo, WelcomeView } from './styles';
import { AppTheme } from '../../../styles/theme';
import { Button } from '../../../styles/components/button';
import { useAssets } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';

const Welcome = () => {
  const { navigate } = useRegisterStackNavigator();

  const { colors } = useTheme<AppTheme>();

  const [assets] = useAssets([require('../../../assets/img/nutri-appointments-in-hand.jpg')]);

  const [nutriAppointmesInHandImage] = assets || [];

  const handleNavigateToPatientAccessType = () => {
    navigate('signIn');
  };

  const handleNavigateToNutritionistAccessType = () => {
    navigate('nutritionistAccessType');
  };

  return (
    <WelcomeContainer>
      <StatusBar backgroundColor={colors.greenDarker} />

      {nutriAppointmesInHandImage && (
        <CachedImage
          source={nutriAppointmesInHandImage}
          style={{ width: '100%', height: 'auto', flex: 1 }}
        />
      )}

      <WelcomeView>
        <WelcomeInfo>
          <Text variant="titleLarge" style={{ color: colors.black }}>
            Boas vindas
          </Text>
          <Text variant="bodyMedium" style={{ color: colors.grayDark, fontWeight: '500' }}>
            Escolha seu perfil de usuário
          </Text>
        </WelcomeInfo>

        <Button
          mb="8px"
          labelStyle={{ color: colors.white }}
          onPress={handleNavigateToPatientAccessType}
        >
          Sou paciente
        </Button>
        <Button
          mb="8px"
          labelStyle={{ color: colors.primary }}
          type="transparent"
          onPress={handleNavigateToNutritionistAccessType}
        >
          Sou nutricionista
        </Button>
      </WelcomeView>
    </WelcomeContainer>
  );
};

export { Welcome };
