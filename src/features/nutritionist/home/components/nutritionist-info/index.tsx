import React from 'react';
import { NutritionistInfoContainer } from './styles';
import { useUserInfo } from '@hooks/user/use-user-info';
import { Text } from '@styles/components/text';

const NutritionistInfo = () => {
  const { user } = useUserInfo();

  return (
    <NutritionistInfoContainer>
      <Text variant="headlineSmall" fontWeight="600">
        Olá, {user?.person?.name || 'Nutricionista'}
      </Text>
    </NutritionistInfoContainer>
  );
};

export { NutritionistInfo };
