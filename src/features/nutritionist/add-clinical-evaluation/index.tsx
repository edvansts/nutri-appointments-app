import React, { useState } from 'react';
import { AddClinicalEvaluationContainer } from './styles';
import { ADD_PATIENT_FORM_STEPS } from './constants';

const AddClinicalEvaluation = () => {
  const [formStep] = useState(ADD_PATIENT_FORM_STEPS.MEDICATIONS_AND_ADDICTIONS);

  const stepsRecord: Record<ADD_PATIENT_FORM_STEPS, JSX.Element> = {
    MEDICATIONS_AND_ADDICTIONS: <></>,
    FAMILY_BACKGROUND: <></>,
    LIFESTYLE: <></>,
  };

  return <AddClinicalEvaluationContainer>{stepsRecord[formStep]}</AddClinicalEvaluationContainer>;
};

export { AddClinicalEvaluation };
