import React from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import { LIFESTYLE_FORM_SCHEMA, type LifestyleFormType } from '../../constants';
import { HelperText, TextInput } from 'react-native-paper';
import { RadioGroup } from '@components/radio-group';
import { BOOLEAN_RADIO_GROUP_OPTIONS } from '@constants/form';
import { SubmitButton } from '@features/nutritionist/components/submit-button';
import { useAddClinicalEvaluationStore } from '../../store/add-clinical-evaluation';
import { Button } from '@styles/components/button';

interface LifestyleProps {
  goToNextStep: () => void;
  goBack: () => void;
}

const Lifestyle = ({ goToNextStep, goBack }: LifestyleProps) => {
  const setLifestyle = useAddClinicalEvaluationStore((state) => state.setLifestyle);
  const savedData = useAddClinicalEvaluationStore((state) => state.LIFESTYLE);

  const { formState, handleSubmit, control, watch } = useForm<LifestyleFormType>({
    resolver: zodResolver(LIFESTYLE_FORM_SCHEMA),
    defaultValues: savedData || {
      hasPhysicalActivityPractice: true,
      physicalActivitiesPracticed: '',
      spareTimeDescription: '',
      timePracticed: '',
      weekTimesPracticed: '',
    },
    shouldUnregister: false,
  });

  const handleSubmitLifestyleForm: SubmitHandler<LifestyleFormType> = (data) => {
    setLifestyle(data);
    goToNextStep();
  };

  const { isValidating } = formState;

  const hasPhysicalActivityPracticeWatched = watch('hasPhysicalActivityPractice');

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
            name="hasPhysicalActivityPractice"
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                onChange={(newValue) => {
                  newValue === 'true' ? onChange(true) : onChange(false);
                }}
                value={value ? 'true' : 'false'}
                options={BOOLEAN_RADIO_GROUP_OPTIONS}
                label="Pratica atividade física?"
              />
            )}
          />

          {hasPhysicalActivityPracticeWatched && (
            <>
              <Controller
                control={control}
                name="physicalActivitiesPracticed"
                render={({ field: { onChange, ...field }, formState: { errors } }) => (
                  <View>
                    <TextInput
                      {...field}
                      onChangeText={onChange}
                      label="Qual/Quais?"
                      autoCapitalize="sentences"
                      mode="outlined"
                    />

                    <HelperText type="error" visible>
                      {errors.physicalActivitiesPracticed?.message}
                    </HelperText>
                  </View>
                )}
              />

              <Controller
                control={control}
                name="timePracticed"
                render={({ field: { onChange, ...field }, formState: { errors } }) => (
                  <View>
                    <TextInput
                      {...field}
                      onChangeText={onChange}
                      label="Por quanto tempo"
                      autoCapitalize="sentences"
                      mode="outlined"
                    />

                    <HelperText type="error" visible>
                      {errors.timePracticed?.message}
                    </HelperText>
                  </View>
                )}
              />

              <Controller
                control={control}
                name="weekTimesPracticed"
                render={({ field: { onChange, ...field }, formState: { errors } }) => (
                  <View>
                    <TextInput
                      {...field}
                      onChangeText={onChange}
                      label="Quantas vezes na semana"
                      autoCapitalize="sentences"
                      mode="outlined"
                    />

                    <HelperText type="error" visible>
                      {errors.weekTimesPracticed?.message}
                    </HelperText>
                  </View>
                )}
              />
            </>
          )}

          <Controller
            control={control}
            name="spareTimeDescription"
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
              <View>
                <TextInput
                  {...field}
                  onChangeText={onChange}
                  label="O que faz nas horas vagas?"
                  autoCapitalize="sentences"
                  mode="outlined"
                />

                <HelperText type="error" visible>
                  {errors.spareTimeDescription?.message}
                </HelperText>
              </View>
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

export { Lifestyle };
