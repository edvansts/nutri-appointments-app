import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React from 'react';
import { useAddClinicalEvaluationStore } from '../../store/add-clinical-evaluation';
import { FEEDING_FORM_SCHEMA, type FeedingFormType } from '../../constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { RadioGroup } from '@components/radio-group';
import { EATING_BEHAVIOR_OPTIONS, EATING_PLACE_OPTIONS, ENVIRONMENT_OPTIONS } from './constants';
import { Text } from '@styles/components/text';
import { HelperText } from 'react-native-paper';
import { useAppTheme } from '@hooks/theme/use-app-theme';
import { Button } from '@styles/components/button';
import { SubmitButton } from '@features/nutritionist/components/submit-button';
import { Select } from '@components/select';

interface FeedingProps {
  goToNextStep: () => void;
  goBack: () => void;
}

const Feeding = ({ goBack, goToNextStep }: FeedingProps) => {
  const setFeeding = useAddClinicalEvaluationStore((state) => state.setFeeding);
  const savedData = useAddClinicalEvaluationStore((state) => state.FEEDING);

  const { formState, handleSubmit, control } = useForm<FeedingFormType>({
    resolver: zodResolver(FEEDING_FORM_SCHEMA),
    defaultValues: savedData,
    shouldUnregister: false,
  });

  const { colors } = useAppTheme();

  const handleSubmitLifestyleForm: SubmitHandler<FeedingFormType> = (data) => {
    setFeeding(data);
    goToNextStep();
  };

  const { isValidating } = formState;

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
            name="eatingBehavior"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <RadioGroup
                onChange={onChange}
                value={value}
                options={EATING_BEHAVIOR_OPTIONS}
                label="Comportamento alimentar"
                errorMessage={errors.eatingBehavior?.message}
              />
            )}
          />

          <Text variant="bodyMedium" color={colors.black} fontWeight="500">
            Onde realiza as principais refeições e os lanches?
          </Text>

          <Controller
            control={control}
            name="breakfastPlace"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <View>
                <Select
                  onChange={onChange}
                  value={value}
                  options={EATING_PLACE_OPTIONS}
                  label="Café da manhã"
                  mode="outlined"
                />

                <HelperText type="error" visible={!!errors.breakfastPlace?.message}>
                  {errors.breakfastPlace?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="snackPlace"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <View>
                <Select
                  onChange={onChange}
                  value={value}
                  options={EATING_PLACE_OPTIONS}
                  label="Lanche da manhã"
                  mode="outlined"
                />

                <HelperText type="error" visible={!!errors.snackPlace?.message}>
                  {errors.snackPlace?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="lunchPlace"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <View>
                <Select
                  onChange={onChange}
                  value={value}
                  options={EATING_PLACE_OPTIONS}
                  label="Almoço"
                  mode="outlined"
                />

                <HelperText type="error" visible={!!errors.lunchPlace?.message}>
                  {errors.lunchPlace?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="afternoonSnackPlace"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <View>
                <Select
                  onChange={onChange}
                  value={value}
                  options={EATING_PLACE_OPTIONS}
                  label="Lanche da tarde"
                  mode="outlined"
                />

                <HelperText type="error" visible={!!errors.afternoonSnackPlace?.message}>
                  {errors.afternoonSnackPlace?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="dinnerPlace"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <View>
                <Select
                  onChange={onChange}
                  value={value}
                  options={EATING_PLACE_OPTIONS}
                  label="Jantar"
                  mode="outlined"
                />

                <HelperText type="error" visible={!!errors.dinnerPlace?.message}>
                  {errors.dinnerPlace?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="supperPlace"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <View>
                <Select
                  onChange={onChange}
                  value={value}
                  options={EATING_PLACE_OPTIONS}
                  label="Ceia"
                  mode="outlined"
                />

                <HelperText type="error" visible={!!errors.supperPlace?.message}>
                  {errors.supperPlace?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="mainMealsEnvironment"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <RadioGroup
                onChange={onChange}
                value={value}
                options={ENVIRONMENT_OPTIONS}
                label="Como é o ambiente onde são realizadas as refeições principais?"
                errorMessage={errors.mainMealsEnvironment?.message}
              />
            )}
          />

          <Button width="140px" style={{ borderRadius: 100 }} type="secondary" onPress={goBack}>
            voltar
          </Button>
        </ScrollView>

        <SubmitButton
          loading={isValidating}
          disabled={isValidating}
          onPress={handleSubmit(handleSubmitLifestyleForm)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { Feeding };
