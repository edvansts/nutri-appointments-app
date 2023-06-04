import React from 'react';
import { Container } from '../../../styles/components/container';
import { StatusBar } from 'expo-status-bar';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { NutritionistHeader } from './components/nutritionist-header';
import { NutritionistActions } from './components/nutritionist-actions';

const Home = () => {
  const { colors } = useAppTheme();

  return (
    <Container style={{ backgroundColor: colors.grayLighter }}>
      <StatusBar backgroundColor={colors.greenDarker} />

      <NutritionistHeader />

      <NutritionistActions />
    </Container>
  );
};

export { Home };
