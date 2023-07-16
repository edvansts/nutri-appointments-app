import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React from 'react';
import { SubmitButton } from '@features/nutritionist/components/submit-button';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import {
  MEDICATIONS_AND_ADDICTIONS_FORM_SCHEMA,
  type MedicationsAndAddictionsFormType,
} from '../../constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { HelperText, RadioButton, TextInput } from 'react-native-paper';
import { Text } from '@styles/components/text';
import { Flex } from '@components/flex';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { ALCOHOLIC_STATUS } from '@constants/patient';
import { useAddClinicalEvaluationStore } from '../../store/add-clinical-evaluation';

interface MedicationsAndAddictionsProps {
  goToNextStep: () => void;
}

const MedicationsAndAddictions = ({ goToNextStep }: MedicationsAndAddictionsProps) => {
  const setMedicationsAndAddictions = useAddClinicalEvaluationStore(
    (state) => state.setMedicationsAndAddictions
  );
  const savedData = useAddClinicalEvaluationStore((state) => state.MEDICATIONS_AND_ADDICTIONS);

  const { formState, handleSubmit, control, watch } = useForm<MedicationsAndAddictionsFormType>({
    resolver: zodResolver(MEDICATIONS_AND_ADDICTIONS_FORM_SCHEMA),
    defaultValues: savedData || {
      useMedicines: false,
      medicinesUsed: '',
      alcoholicStatus: ALCOHOLIC_STATUS.INACTIVE,
      alcoholicDescription: '',
      hasPerformedWeightLossTreatment: false,
      perfomedWeightLossTreatments: '',
    },
    shouldUnregister: false,
  });

  const { colors } = useAppTheme();

  const handleSubmitMedicationsAndAddictionForm: SubmitHandler<MedicationsAndAddictionsFormType> = (
    data
  ) => {
    setMedicationsAndAddictions(data);
    goToNextStep();
  };

  const { isValidating } = formState;

  const useMedicinesWatched = watch('useMedicines');
  const hasPerformedWeightLossTreatmentWatched = watch('hasPerformedWeightLossTreatment');
  const alcoholicStatusWatched = watch('alcoholicStatus');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 32,
            paddingHorizontal: 16,
            rowGap: 16,
            paddingBottom: 48,
          }}
        >
          <Controller
            control={control}
            name="useMedicines"
            render={({ field: { onChange, value } }) => (
              <Flex flexDirection="column" gap={8}>
                <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                  Faz uso de medicamentos ou suplementos?
                </Text>

                <RadioButton.Group
                  onValueChange={(newValue) => {
                    newValue === 'true' ? onChange(true) : onChange(false);
                  }}
                  value={value ? 'true' : 'false'}
                >
                  <Flex flexDirection="row" alignItems="center" gap={8}>
                    <RadioButton value={'true'} />
                    <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                      Sim
                    </Text>
                  </Flex>
                  <Flex flexDirection="row" alignItems="center" gap={8}>
                    <RadioButton value={'false'} />
                    <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                      Não
                    </Text>
                  </Flex>
                </RadioButton.Group>
              </Flex>
            )}
          />

          {useMedicinesWatched && (
            <Controller
              control={control}
              name="medicinesUsed"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Quais?"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.medicinesUsed?.message}
                  </HelperText>
                </View>
              )}
            />
          )}

          <Controller
            control={control}
            name="hasPerformedWeightLossTreatment"
            render={({ field: { onChange, value } }) => (
              <Flex flexDirection="column" gap={8}>
                <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                  Já realizou algum tratamento para emagrecer?
                </Text>

                <RadioButton.Group
                  onValueChange={(newValue) => {
                    newValue === 'true' ? onChange(true) : onChange(false);
                  }}
                  value={value ? 'true' : 'false'}
                >
                  <Flex flexDirection="row" alignItems="center" gap={8}>
                    <RadioButton value={'true'} />
                    <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                      Sim
                    </Text>
                  </Flex>
                  <Flex flexDirection="row" alignItems="center" gap={8}>
                    <RadioButton value={'false'} />
                    <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                      Não
                    </Text>
                  </Flex>
                </RadioButton.Group>
              </Flex>
            )}
          />

          {hasPerformedWeightLossTreatmentWatched && (
            <Controller
              control={control}
              name="perfomedWeightLossTreatments"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Quais? Por quanto tempo?"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.perfomedWeightLossTreatments?.message}
                  </HelperText>
                </View>
              )}
            />
          )}

          <Controller
            control={control}
            name="alcoholicStatus"
            render={({ field: { onChange, value } }) => (
              <Flex flexDirection="column" gap={8}>
                <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                  Consome bebidas alcóolicas?
                </Text>

                <RadioButton.Group
                  onValueChange={(newValue) => {
                    onChange(newValue as ALCOHOLIC_STATUS);
                  }}
                  value={value}
                >
                  <Flex flexDirection="row" alignItems="center" gap={8}>
                    <RadioButton value={ALCOHOLIC_STATUS.ACTIVE} />
                    <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                      Sim
                    </Text>
                  </Flex>
                  <Flex flexDirection="row" alignItems="center" gap={8}>
                    <RadioButton value={ALCOHOLIC_STATUS.INACTIVE} />
                    <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                      Não
                    </Text>
                  </Flex>
                  <Flex flexDirection="row" alignItems="center" gap={8}>
                    <RadioButton value={ALCOHOLIC_STATUS.FORMER} />
                    <Text variant="bodyMedium" color={colors.black} fontWeight="500">
                      Ex-etilista
                    </Text>
                  </Flex>
                </RadioButton.Group>
              </Flex>
            )}
          />

          {alcoholicStatusWatched !== ALCOHOLIC_STATUS.INACTIVE && (
            <Controller
              control={control}
              name="alcoholicDescription"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Por quanto tempo/parou há quanto tempo?"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.alcoholicDescription?.message}
                  </HelperText>
                </View>
              )}
            />
          )}
        </ScrollView>

        <SubmitButton
          loading={isValidating}
          disabled={isValidating}
          onPress={handleSubmit(handleSubmitMedicationsAndAddictionForm)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { MedicationsAndAddictions };
