import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React from 'react';
import { useAddClinicalEvaluationStore } from '../../store/add-clinical-evaluation';
import { FAMILY_BACKGROUND_FORM_SCHEMA, type FamilyBackgroundFormType } from '../../constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler, Controller } from 'react-hook-form';
import { HelperText, TextInput } from 'react-native-paper';
import { Button } from '@styles/components/button';
import { CheckboxGroup } from '@components/checkbox-group';
import {
  CLINICAL_HISTORY_DISEASE_OPTIONS,
  FAMILIAR_BACKGROUND_DISEASES_OPTIONS,
  SYMPTOM_OPTIONS,
} from './constants';
import { CLINICAL_HISTORY, FAMILIAR_BACKGROUND, SYMPTOM } from '@constants/patient';
import { Flex } from '@components/flex';
import { useAppTheme } from '@hooks/theme/use-app-theme';

interface FamilyBackgroundFormProps {
  onSubmit: () => void;
  goBack: () => void;
  isSubmitting: boolean;
}

const FamilyBackgroundForm = ({ goBack, onSubmit, isSubmitting }: FamilyBackgroundFormProps) => {
  const setFamilyBackgroundFormData = useAddClinicalEvaluationStore(
    (state) => state.setFamilyBackgroundFormData
  );
  const savedData = useAddClinicalEvaluationStore((state) => state.FAMILY_BACKGROUND);

  const { handleSubmit, control, watch } = useForm<FamilyBackgroundFormType>({
    resolver: zodResolver(FAMILY_BACKGROUND_FORM_SCHEMA),
    defaultValues: savedData || {
      clinicalHistoryDiseases: [],
      familiarBackgroundDiseases: [],
      symptomns: [],
      otherClinicalHistoryDiseases: '',
      otherFamiliarBackgroudDiseases: '',
      otherSymptomns: '',
    },
    shouldUnregister: false,
  });

  const { colors } = useAppTheme();

  const handleSubmitFamilyBackgroundForm: SubmitHandler<FamilyBackgroundFormType> = (data) => {
    setFamilyBackgroundFormData(data);
    onSubmit();
  };

  const familiarBackgroundDiseasesWatched = watch('familiarBackgroundDiseases');
  const isOtherFamiliarBackgroundDiseasesSelected = familiarBackgroundDiseasesWatched.includes(
    FAMILIAR_BACKGROUND.OTHER
  );

  const clinicalHistoryDiseasesWatched = watch('clinicalHistoryDiseases');
  const isOtherClinicalHistoryDiseasesSelected = clinicalHistoryDiseasesWatched.includes(
    CLINICAL_HISTORY.OTHER
  );

  const symptomnsWatched = watch('symptomns');
  const isOthersSymptomnsSelected = symptomnsWatched.includes(SYMPTOM.OTHER);

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
            name="familiarBackgroundDiseases"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <CheckboxGroup
                onChange={onChange}
                checkedValues={value}
                options={FAMILIAR_BACKGROUND_DISEASES_OPTIONS}
                label="Na família, há/houve algum caso de:"
                errorMessage={errors.familiarBackgroundDiseases?.message}
              />
            )}
          />

          {isOtherFamiliarBackgroundDiseasesSelected && (
            <Controller
              control={control}
              name="otherFamiliarBackgroudDiseases"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Qual?"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.otherFamiliarBackgroudDiseases?.message}
                  </HelperText>
                </View>
              )}
            />
          )}

          <Controller
            control={control}
            name="clinicalHistoryDiseases"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <CheckboxGroup
                onChange={onChange}
                checkedValues={value}
                options={CLINICAL_HISTORY_DISEASE_OPTIONS}
                label="Quais doenças apresenta ou já apresentou?"
                errorMessage={errors.clinicalHistoryDiseases?.message}
              />
            )}
          />

          {isOtherClinicalHistoryDiseasesSelected && (
            <Controller
              control={control}
              name="otherClinicalHistoryDiseases"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Qual?"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.otherClinicalHistoryDiseases?.message}
                  </HelperText>
                </View>
              )}
            />
          )}

          <Controller
            control={control}
            name="symptomns"
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <CheckboxGroup
                onChange={onChange}
                checkedValues={value}
                options={SYMPTOM_OPTIONS}
                label="Apresentou ou apresenta alguns dos sintomas abaixo?"
                errorMessage={errors.symptomns?.message}
              />
            )}
          />

          {isOthersSymptomnsSelected && (
            <Controller
              control={control}
              name="otherSymptomns"
              render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <View>
                  <TextInput
                    {...field}
                    onChangeText={onChange}
                    label="Qual?"
                    autoCapitalize="sentences"
                    mode="outlined"
                  />

                  <HelperText type="error" visible>
                    {errors.otherSymptomns?.message}
                  </HelperText>
                </View>
              )}
            />
          )}

          <Flex gap={16} flexDirection="row">
            <Button style={{ borderRadius: 100, flex: 1 }} type="secondary" onPress={goBack}>
              voltar
            </Button>

            <Button
              style={{ borderRadius: 100, flex: 1 }}
              textColor={colors.white}
              type="primary"
              loading={isSubmitting}
              disabled={isSubmitting}
              onPress={handleSubmit(handleSubmitFamilyBackgroundForm)}
            >
              salvar
            </Button>
          </Flex>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { FamilyBackgroundForm };
