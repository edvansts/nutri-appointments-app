import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { AddPatientContainer } from './styles';
import { ADD_PATIENT_FORM_STEPS } from './constants';
import { PersonalData } from './components/personal-data';

const AddPatient = () => {
  const [formStep, setFormStep] = useState(ADD_PATIENT_FORM_STEPS.PERSONAL_DATA);

  const stepsRecord: Record<ADD_PATIENT_FORM_STEPS, JSX.Element> = {
    PERSONAL_DATA: <PersonalData />,
  };

  return (
    <AddPatientContainer>
      <ScrollView contentContainerStyle={{ paddingVertical: 36, paddingHorizontal: 12 }}>
        {stepsRecord[formStep]}
      </ScrollView>
    </AddPatientContainer>
  );
};

export { AddPatient };
