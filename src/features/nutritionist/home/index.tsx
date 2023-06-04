import { Text } from 'react-native';
import React from 'react';
import { Container } from '../../../styles/components/container';
import { useTokenStore } from '../../../store/token';
import { StatusBar } from 'expo-status-bar';
import { useAppTheme } from '@hooks/theme/use-app-theme';

const Home = () => {
  const { setToken } = useTokenStore();

  const { colors } = useAppTheme();

  return (
    <Container>
      <StatusBar backgroundColor={colors.white} />

      <Text
        onPress={() => {
          setToken('');
        }}
      >
        Nutritionist Home
      </Text>
    </Container>
  );
};

export { Home };
