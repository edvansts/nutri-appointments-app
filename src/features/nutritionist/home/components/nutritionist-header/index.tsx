import React from 'react';
import { NutritionistHeaderContainer } from './styles';
import { useUserInfo } from '@hooks/user/use-user-info';
import { Text } from '@styles/components/text';

const NutritionistHeader = () => {
  const { user } = useUserInfo();

  return (
    <NutritionistHeaderContainer>
      <Text variant="headlineSmall" fontWeight="600">
        Olá, {user?.person?.name || 'Nutricionista'}
      </Text>
    </NutritionistHeaderContainer>
  );
};

export { NutritionistHeader };
