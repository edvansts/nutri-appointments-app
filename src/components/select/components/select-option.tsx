/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { type SelectOption } from '..';
import { Menu, TouchableRipple } from 'react-native-paper';
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
    <TouchableRipple
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={() => {
        onPress(option);
      }}
    >
      <Menu.Item
        titleStyle={{
          color: isActived ? theme.colors.greenDarker : theme.colors.grayDark,
        }}
        title={label}
        style={{
          flex: 1,
          maxWidth,
          backgroundColor: theme.colors.background,
        }}
      />
    </TouchableRipple>
  );
};

export { SelectionOption };
