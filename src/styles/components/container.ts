import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { colors } from '../theme';

export const Container = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  background-color: ${colors.background};
`;
