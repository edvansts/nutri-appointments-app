import React from 'react';
import { View } from 'react-native';
import { useRegisterStackNavigator } from '../../hooks/navigator/use-register-stack-navigator';
import { Text } from 'react-native-paper';
import { Container } from '../../styles/components/container';
import { Button } from '../../styles/components/button';
import { StatusBar } from 'expo-status-bar';

const FirstAccess = () => {
  const { navigate } = useRegisterStackNavigator();

  return (
    <Container>
      <StatusBar style="auto" />
      <View style={{ margin: 28 }}>
        <Text variant="headlineMedium" style={{ textAlign: 'center' }}>
          nutri+
        </Text>
        <Text variant="headlineMedium" style={{ textAlign: 'center' }}>
          Assistência Nutricional
        </Text>
        <Text variant="headlineMedium" style={{ textAlign: 'center' }}>
          HU - UFS
        </Text>

        <Text variant="bodyLarge" style={{ textAlign: 'center', marginVertical: 20 }}>
          Que tipo de acesso você quer realizar?
        </Text>

        <Button margin="10px 0px" textColor="white" onPress={() => { navigate('forgotPassword'); }}>
          Paciente
        </Button>
        <Button margin="10px 0px" textColor="white" onPress={() => { navigate('forgotPassword'); }}>
          Nutricionista
        </Button>
      </View>
    </Container>
  );
};

export { FirstAccess };
