/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { type SelectOption } from '..';
import { Menu } from 'react-native-paper';
import { useAppTheme } from '@hooks/theme/use-app-theme';

interface SelectOptionProps<T = any> {
  option: SelectOption<T>;
  onPress: (option: SelectOption<T>) => void;
  isActived: boolean;
  maxWidth?: number;
}

const SelectionOption = ({ option, isActived, onPress, maxWidth }: SelectOptionProps) => {
  const theme = useAppTheme();

  const { label } = option;

  return (
    <Menu.Item
      onPress={() => {
        onPress(option);
      }}
      titleStyle={{
        color: isActived ? theme.colors.greenDarker : theme.colors.grayDark,
        fontWeight: isActived ? '500' : '400',
      }}
      title={label}
      style={{
        flex: 1,
        maxWidth,
        backgroundColor: theme.colors.background,
      }}
    />
  );
};

export { SelectionOption };
