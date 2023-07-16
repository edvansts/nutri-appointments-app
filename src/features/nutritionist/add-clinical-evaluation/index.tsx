import React, { useCallback, useState } from 'react';
import { AddClinicalEvaluationContainer } from './styles';
import { ADD_CLINICAL_EVALUATION_STEPS } from './constants';
import { MedicationsAndAddictions } from './components/medications-and-addictions';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useNutritionistMainNavigator } from '@hooks/navigator/use-nutritionist-main-stack-navigator';
import { type NutritionistMainRouteProps } from '@routes/nutritionist/types';
import { Lifestyle } from './components/lifestyle';
import { Feeding } from './components/feeding';
import { useAddClinicalEvaluationStore } from './store/add-clinical-evaluation';

const AddClinicalEvaluation = () => {
  const [formStep, setFormStep] = useState(
    ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS
  );

  const { navigate } = useNutritionistMainNavigator();
  const {
    params: { patientId },
  } = useRoute<NutritionistMainRouteProps<'addClinicalEvaluation'>>();

  const resetData = useAddClinicalEvaluationStore((state) => state.resetData);

  useFocusEffect(
    useCallback(() => {
      return () => {
        resetData();
      };
    }, [])
  );

  const stepsRecord: Record<ADD_CLINICAL_EVALUATION_STEPS, JSX.Element> = {
    MEDICATIONS_AND_ADDICTIONS: (
      <MedicationsAndAddictions
        goToNextStep={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE);
        }}
      />
    ),
    LIFESTYLE: (
      <Lifestyle
        goToNextStep={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.FEEDING);
        }}
        goBack={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS);
        }}
      />
    ),
    FEEDING: (
      <Feeding
        goToNextStep={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.FAMILY_BACKGROUND);
        }}
        goBack={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE);
        }}
      />
    ),
    FAMILY_BACKGROUND: <></>,
  };

  return <AddClinicalEvaluationContainer>{stepsRecord[formStep]}</AddClinicalEvaluationContainer>;
};

export { AddClinicalEvaluation };
