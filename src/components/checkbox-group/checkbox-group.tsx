import React from 'react';
import { Flex } from '@components/flex';
import { Checkbox, HelperText } from 'react-native-paper';
import { Text } from '@styles/components/text';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { type GroupOption } from 'src/types/utils';

interface CheckboxGroupProps<T = string> {
  label?: string;
  checkedValues: T[];
  onChange: (value: T[]) => void;
  options: Array<GroupOption<T>>;
  errorMessage?: string;
}

function CheckboxGroup<T = string>({
  onChange,
  checkedValues,
  label,
  options,
  errorMessage,
}: CheckboxGroupProps<T>) {
  const { colors } = useAppTheme();

  const onCheckedChange = (value: T) => {
    const isChecked = checkedValues.includes(value);

    if (isChecked) {
      const newCheckedValues = checkedValues.filter((checkedValue) => checkedValue !== value);

      onChange(newCheckedValues);
      return;
    }

    const newCheckedValues = [...checkedValues, value];
    onChange(newCheckedValues);
  };

  return (
    <Flex flexDirection="column" gap={8}>
      {!!label && (
        <Text variant="bodyMedium" color={colors.black} fontWeight="500">
          {label}
        </Text>
      )}

      <Flex flexDirection="column">
        {options.map(({ label, value, key = value }) => {
          const isChecked = checkedValues.includes(value);

          return (
            <Flex
              key={String(key)}
              flexDirection="row"
              alignItems="center"
              gap={8}
              paddingVertical={4}
            >
              <Checkbox
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={() => {
                  onCheckedChange(value);
                }}
              />
              <Text
                variant="bodyMedium"
                color={colors.black}
                fontWeight="500"
                onPress={() => {
                  onCheckedChange(value);
                }}
              >
                {label}
              </Text>
            </Flex>
          );
        })}
      </Flex>

      {!!errorMessage && <HelperText type="error">{errorMessage}</HelperText>}
    </Flex>
  );
}

export { CheckboxGroup };
