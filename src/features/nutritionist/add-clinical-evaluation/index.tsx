import React, { useCallback, useState } from 'react';
import { AddClinicalEvaluationContainer } from './styles';
import { ADD_CLINICAL_EVALUATION_STEPS } from './constants';
import { MedicationsAndAddictionsForm } from './components/medications-and-addictions-form';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useNutritionistMainNavigator } from '@hooks/navigator/use-nutritionist-main-stack-navigator';
import { type NutritionistMainRouteProps } from '@routes/nutritionist/types';
import { LifestyleForm } from './components/lifestyle';
import { FeedingForm } from './components/feeding-form';
import { useAddClinicalEvaluationStore } from './store/add-clinical-evaluation';
import { FamilyBackgroundForm } from './components/family-background-form';

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
      <MedicationsAndAddictionsForm
        goToNextStep={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE);
        }}
      />
    ),
    LIFESTYLE: (
      <LifestyleForm
        goToNextStep={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.FEEDING);
        }}
        goBack={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS);
        }}
      />
    ),
    FEEDING: (
      <FeedingForm
        goToNextStep={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.FAMILY_BACKGROUND);
        }}
        goBack={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.LIFESTYLE);
        }}
      />
    ),
    FAMILY_BACKGROUND: (
      <FamilyBackgroundForm
        onSubmit={() => {
          console.log('finalized');
        }}
        isSubmitting={false}
        goBack={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.FEEDING);
        }}
      />
    ),
  };

  return <AddClinicalEvaluationContainer>{stepsRecord[formStep]}</AddClinicalEvaluationContainer>;
};

export { AddClinicalEvaluation };
