import React from 'react';
import { Container } from '../../../styles/components/container';
import { StatusBar } from 'expo-status-bar';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { NutritionistInfo } from './components/nutritionist-info';
import { MainActions } from './components/main-actions';
import { NextAppoinments } from './components/next-appointments';
import { HomeContent, HomeView } from './styles';

const Home = () => {
  const { colors } = useAppTheme();

  return (
    <Container>
      <StatusBar backgroundColor={colors.greenDarker} />

      <HomeView contentContainerStyle={{ flexGrow: 1 }}>
        <NutritionistInfo />

        <HomeContent>
          <MainActions />

          <NextAppoinments />
        </HomeContent>
      </HomeView>
    </Container>
  );
};

export { Home };
