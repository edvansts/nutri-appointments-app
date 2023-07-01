import React, { useState } from 'react';
import { AddClinicalEvaluationContainer } from './styles';
import { ADD_CLINICAL_EVALUATION_STEPS } from './constants';
import { MedicationsAndAddictions } from './components/medications-and-addictions';
import { useRoute } from '@react-navigation/native';
import { useNutritionistMainNavigator } from '@hooks/navigator/use-nutritionist-main-stack-navigator';
import { type NutritionistMainRouteProps } from '@routes/nutritionist/types';

const AddClinicalEvaluation = () => {
  const [formStep, setFormStep] = useState(
    ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS
  );

  const { navigate } = useNutritionistMainNavigator();
  const {
    params: { patientId },
  } = useRoute<NutritionistMainRouteProps<'addClinicalEvaluation'>>();

  const stepsRecord: Record<ADD_CLINICAL_EVALUATION_STEPS, JSX.Element> = {
    MEDICATIONS_AND_ADDICTIONS: (
      <MedicationsAndAddictions
        goToNextStep={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.FAMILY_BACKGROUND);
        }}
      />
    ),
    FAMILY_BACKGROUND: <></>,
    LIFESTYLE: <></>,
  };

  return <AddClinicalEvaluationContainer>{stepsRecord[formStep]}</AddClinicalEvaluationContainer>;
};

export { AddClinicalEvaluation };
