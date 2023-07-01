import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import React from 'react';
import { SubmitButton } from '@features/nutritionist/components/submit-button';
import { type SubmitHandler, useForm } from 'react-hook-form';
import {
  MEDICATIONS_AND_ADDICTIONS_FORM_SCHEMA,
  type MedicationsAndAddictionsFormType,
} from '../../constants';
import { zodResolver } from '@hookform/resolvers/zod';

interface MedicationsAndAddictionsProps {
  goToNextStep: () => void;
}

const MedicationsAndAddictions = ({ goToNextStep }: MedicationsAndAddictionsProps) => {
  const { formState, handleSubmit } = useForm<MedicationsAndAddictionsFormType>({
    resolver: zodResolver(MEDICATIONS_AND_ADDICTIONS_FORM_SCHEMA),
  });

  const handleSubmitMedicationsAndAddictionForm: SubmitHandler<MedicationsAndAddictionsFormType> = (
    data
  ) => {
    console.log(data);
    goToNextStep();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ScrollView contentContainerStyle={{ paddingVertical: 32, paddingHorizontal: 12 }}>
          <Text>MedicationsAndAddictions</Text>
        </ScrollView>

        <SubmitButton
          visible={formState.isDirty}
          //   loading={isLoading}
          //   disabled={isLoading}
          onPress={handleSubmit(handleSubmitMedicationsAndAddictionForm)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { MedicationsAndAddictions };
