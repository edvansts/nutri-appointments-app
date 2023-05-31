import { View } from 'react-native';
import React from 'react';
import { Container } from '../../styles/components/container';
import { CachedImage } from '../../components/cached-image';
import { useRegisterStackNavigator } from '../../hooks/navigator/use-register-stack-navigator';
import { Text, Title, useTheme } from 'react-native-paper';
import { WelcomeContainer, WelcomeInfo, WelcomeView } from './styles';
import { AppTheme } from '../../styles/theme';
import { Button } from '../../styles/components/button';
import { useAssets } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';

const Welcome = () => {
  const { navigate } = useRegisterStackNavigator();

  const { colors } = useTheme<AppTheme>();

  const [assets] = useAssets([require('../../assets/img/nutri-appointments-in-hand.jpg')]);

  const [nutriAppointmesInHandImage] = assets || [];

  const handleNavigateToPatientsLoginScreen = () => {
    navigate('signIn');
  };

  const handleNavigateToNutritionistsLoginScreen = () => {
    navigate('signIn');
  };

  return (
    <WelcomeContainer>
      <StatusBar backgroundColor={colors.greenDarker} />

      {nutriAppointmesInHandImage && (
        <CachedImage source={nutriAppointmesInHandImage} style={{ width: '100%', height: '70%' }} />
      )}

      <WelcomeView>
        <WelcomeInfo>
          <Text variant="headlineLarge" style={{ color: colors.black }}>
            Boas vindas
          </Text>
          <Text variant="bodyMedium" style={{ color: colors.grayDark, fontWeight: '500' }}>
            Escolha seu perfil de usuário
          </Text>
        </WelcomeInfo>

        <Button
          mb="8px"
          labelStyle={{ color: colors.white }}
          onPress={handleNavigateToPatientsLoginScreen}
        >
          Sou paciente
        </Button>
        <Button
          mb="8px"
          labelStyle={{ color: colors.primary }}
          type="transparent"
          onPress={handleNavigateToNutritionistsLoginScreen}
        >
          Sou nutricionista
        </Button>
      </WelcomeView>
    </WelcomeContainer>
  );
};

export { Welcome };
