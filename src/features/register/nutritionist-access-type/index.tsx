import React from 'react';
import { Container } from '../../../styles/components/container';
import { StatusBar } from 'expo-status-bar';
import { useAppTheme } from '../../../hooks/theme/use-app-theme';
import { useAssets } from 'expo-asset';
import { ChooseAccessTypeInfo, ChooseAccessTypeView } from './styles';
import { Text } from 'react-native-paper';
import { Button } from '../../../styles/components/button';
import { useRegisterStackNavigator } from '../../../hooks/navigator/use-register-stack-navigator';
import { Image, type ImageSourcePropType } from 'react-native';

const NutritionistAccessType = () => {
  const { colors } = useAppTheme();

  const { navigate } = useRegisterStackNavigator();

  const [assets] = useAssets([require('../../../assets/img/nutri-appointments-in-hand.jpg')]);

  const [nutriAppointmesInHandImage] = assets || [];

  const handleNavigateToNutritionistLogin = () => {
    navigate('signIn', { signInType: 'NUTRITIONIST' });
  };

  const handleNavigateToNutritionistFirstAccess = () => {
    navigate('nutritionistDataConfirmation');
  };

  return (
    <Container>
      <StatusBar backgroundColor={colors.greenDarker} />

      {nutriAppointmesInHandImage && (
        <Image
          source={nutriAppointmesInHandImage as ImageSourcePropType}
          style={{ width: '100%', height: 'auto', flex: 1 }}
        />
      )}

      <ChooseAccessTypeView>
        <ChooseAccessTypeInfo>
          <Text variant="titleMedium">Perfil de usuário: Nutricionista</Text>
          <Text variant="bodyMedium" style={{ color: colors.grayDark }}>
            Escolha seu tipo de acesso
          </Text>
        </ChooseAccessTypeInfo>

        <Button
          mb="8px"
          labelStyle={{ color: colors.white }}
          onPress={handleNavigateToNutritionistFirstAccess}
        >
          Primeiro Acesso
        </Button>
        <Button
          mb="8px"
          labelStyle={{ color: colors.primary }}
          type="transparent"
          onPress={handleNavigateToNutritionistLogin}
        >
          Já tenho cadastro
        </Button>
      </ChooseAccessTypeView>
    </Container>
  );
};

export { NutritionistAccessType };
