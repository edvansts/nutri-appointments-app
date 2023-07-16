import React from 'react';
import { Flex } from '@components/flex';
import { RadioButton } from 'react-native-paper';
import { Text } from '@styles/components/text';
import { useAppTheme } from '@hooks/theme/use-app-theme';

export interface RadioGroupOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label?: string;
  value: string;
  onChange: (newValue: string) => void;
  options: RadioGroupOption[];
}

const RadioGroup = ({ onChange, value, label, options }: RadioGroupProps) => {
  const { colors } = useAppTheme();

  return (
    <Flex flexDirection="column" gap={8}>
      {!!label && (
        <Text variant="bodyMedium" color={colors.black} fontWeight="500">
          {label}
        </Text>
      )}

      <RadioButton.Group onValueChange={onChange} value={value}>
        {options.map(({ label, value }) => {
          return (
            <Flex key={value} flexDirection="row" alignItems="center" gap={8}>
              <RadioButton value={value} />
              <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                {label}
              </Text>
            </Flex>
          );
        })}
      </RadioButton.Group>
    </Flex>
  );
};

export { RadioGroup };
