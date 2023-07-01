import { useAppTheme } from '@hooks/theme/use-app-theme';
import React from 'react';
import * as S from './styles';
import { type FABProps } from 'react-native-paper';

type SubmitButtonProps = Partial<FABProps>;

const SubmitButton = (props: SubmitButtonProps) => {
  const { colors } = useAppTheme();

  return <S.SubmitButton color={colors.white} icon="arrow-right" {...props} />;
};

export { SubmitButton };
