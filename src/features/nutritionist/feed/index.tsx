import { Text } from 'react-native';
import React from 'react';
import { Container } from '../../../styles/components/container';
import { useTokenStore } from '../../../store/token';

const Feed = () => {
  const { setToken } = useTokenStore();

  return (
    <Container>
      <Text onPress={() => { setToken(''); }}>Nutritionist Feed</Text>
    </Container>
  );
};

export { Feed };
