import React from 'react';
import { NutritionistInfoContainer } from './styles';
import { useUserInfo } from '@hooks/user/use-user-info';
import { Text } from '@styles/components/text';
import { useTokenStore } from '@store/token';

const NutritionistInfo = () => {
  const { user } = useUserInfo();

  const { setToken } = useTokenStore();

  return (
    <NutritionistInfoContainer>
      <Text
        variant="headlineSmall"
        fontWeight="600"
        onPress={() => {
          setToken('');
        }}
      >
        Olá, {user?.person?.name || 'Nutricionista'}
      </Text>
    </NutritionistInfoContainer>
  );
};

export { NutritionistInfo };
