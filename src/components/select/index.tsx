/* eslint-disable @typescript-eslint/no-explicit-any */
import { type LayoutChangeEvent, type LayoutRectangle, ScrollView, View } from 'react-native';
import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { Divider, IconButton, Menu, TouchableRipple } from 'react-native-paper';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { colors } from '@styles/theme';
import { SelectionOption } from './components/select-option';
import { Text } from '@styles/components/text';

export interface SelectOption<T> {
  label: string;
  value: T;
  key?: string;
}

interface SelectProps<T> {
  placeholder?: string;
  label?: string;
  mode?: 'outlined' | 'flat';
  options: Array<SelectOption<T>>;
  value: T;
  onChange: (value: T) => void;
}

function Select<T = any>({ placeholder, options, mode, label, onChange, value }: SelectProps<T>) {
  const [isVisible, setIsVisible] = useState(false);

  const theme = useAppTheme();

  const [inputLayout, setInputLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const onLayout = (event: LayoutChangeEvent) => {
    setInputLayout(event.nativeEvent.layout);
  };

  const isActive = useCallback(
    (currentValue: T) => {
      return value === currentValue;
    },
    [value]
  );

  const activedOption = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [value, options]);

  const onOptionPress = useCallback(
    (option: SelectOption<T>) => {
      onChange(option.value);
      setIsVisible(false);
    },
    [onChange]
  );

  return (
    <Menu
      visible={isVisible}
      onDismiss={() => {
        setIsVisible(false);
      }}
      theme={theme}
      contentStyle={{
        backgroundColor: colors.background,
      }}
      anchor={
        <TouchableRipple
          onPress={() => {
            setIsVisible(true);
          }}
          onLayout={onLayout}
        >
          <View
            style={{
              borderColor: colors.grayDark,
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: 4,
              paddingLeft: 16,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              color={colors.grayDark}
              variant="bodyLarge"
              fontWeight={activedOption ? '500' : '400'}
            >
              {activedOption?.label || label}
            </Text>

            <IconButton icon={isVisible ? 'menu-up' : 'menu-down'} size={24} />
          </View>
        </TouchableRipple>
      }
      style={{
        maxWidth: inputLayout?.width,
        width: inputLayout?.width,
        marginTop: inputLayout?.height,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView
        bounces={false}
        style={{
          maxHeight: 200,
        }}
      >
        {options.map((option) => (
          <Fragment key={option.key || String(option.value)}>
            <SelectionOption
              isActived={isActive(option.value)}
              onPress={onOptionPress}
              option={option}
              maxWidth={inputLayout.width}
            />
            <Divider />
          </Fragment>
        ))}
      </ScrollView>
    </Menu>
  );
}

export { Select };
