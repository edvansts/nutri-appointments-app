import React, { useCallback, useState } from 'react';
import { AddClinicalEvaluationContainer } from './styles';
import { ADD_CLINICAL_EVALUATION_STEPS, type FamilyBackgroundFormType } from './constants';
import { MedicationsAndAddictionsForm } from './components/medications-and-addictions-form';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useNutritionistMainNavigator } from '@hooks/navigator/use-nutritionist-main-stack-navigator';
import { type NutritionistMainRouteProps } from '@routes/nutritionist/types';
import { LifestyleForm } from './components/lifestyle';
import { FeedingForm } from './components/feeding-form';
import { useAddClinicalEvaluationStore } from './store/add-clinical-evaluation';
import { FamilyBackgroundForm } from './components/family-background-form';
import { usePostCreateClinicalEvaluation } from '../api/post-create-clinical-evaluation';
import Toast from 'react-native-toast-message';
import { DEFAULT_TOAST_VISIBILITY_TIME } from '@constants/time';
import { type PostCreateClinicalEvaluationParams } from '../api/types';
import dayjs from 'dayjs';

const AddClinicalEvaluation = () => {
  const [formStep, setFormStep] = useState(
    ADD_CLINICAL_EVALUATION_STEPS.MEDICATIONS_AND_ADDICTIONS
  );

  const { navigate } = useNutritionistMainNavigator();

  const { mutate, isLoading } = usePostCreateClinicalEvaluation({
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Avaliação clínica adicionada com sucesso!',
        text2: 'Clique para acessar',
        // onPress: () => {
        //   navigate('patientDetails', { patientId: patient.id });
        // },
        visibilityTime: DEFAULT_TOAST_VISIBILITY_TIME,
      });

      navigate('patientDetails', { patientId });
    },
  });

  const feedingData = useAddClinicalEvaluationStore((state) => state.FEEDING);
  const lifestyleData = useAddClinicalEvaluationStore((state) => state.LIFESTYLE);
  const medicationsAndAddictionsData = useAddClinicalEvaluationStore(
    (state) => state.MEDICATIONS_AND_ADDICTIONS
  );

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

  const handleSubmit = (familyBackgroundData: FamilyBackgroundFormType) => {
    if (!familyBackgroundData || !feedingData || !lifestyleData || !medicationsAndAddictionsData) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar avaliação clínica',
        text2: 'Tente novamente mais tarde',
      });
      return;
    }

    const spareTimeDescription = `Atividades praticadas: 
      ${lifestyleData.physicalActivitiesPracticed || ''}\n
    Por quanto tempo?: ${lifestyleData.timePracticed || ''}\n
    Quantas vezes na semana: ${lifestyleData.weekTimesPracticed || ''}\n
    O que faz nas horas vagas: ${lifestyleData.spareTimeDescription || ''}\n
    `;

    const payload: PostCreateClinicalEvaluationParams = {
      patientId,
      afternoonSnackPlace: feedingData.afternoonSnackPlace,
      lunchPlace: feedingData.lunchPlace,
      breakfastPlace: feedingData.breakfastPlace,
      dinnerPlace: feedingData.dinnerPlace,
      snackPlace: feedingData.snackPlace,
      supperPlace: feedingData.supperPlace,
      mainMealsEnvironment: feedingData.mainMealsEnvironment,
      clinicalHistory: familyBackgroundData.clinicalHistoryDiseases,
      alcoholicStatus: medicationsAndAddictionsData.alcoholicStatus,
      eatingBehavior: feedingData.eatingBehavior,
      examDate: dayjs().toISOString(),
      familiarBackground: familyBackgroundData.familiarBackgroundDiseases,
      reportedSymptoms: familyBackgroundData.symptomns,
      smokerStatus: medicationsAndAddictionsData.smokerStatus,
      smokerDescription: medicationsAndAddictionsData.smokerDescription,
      alcoholicDescription: medicationsAndAddictionsData.alcoholicDescription,
      medicationsAndSupplementsUsed: medicationsAndAddictionsData.medicinesUsed,
      otherClinicalHistories: familyBackgroundData.otherClinicalHistoryDiseases,
      otherFamiliarBackgrounds: familyBackgroundData.otherFamiliarBackgroudDiseases,
      otherReportedSymptoms: familyBackgroundData.otherSymptomns,
      physicalActivityDescription: lifestyleData.physicalActivitiesPracticed,
      spareTimeDescription,
      weightLossTreatmentsPerformed: medicationsAndAddictionsData.perfomedWeightLossTreatments,
    };

    mutate(payload);
  };

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
        onSubmit={handleSubmit}
        isSubmitting={isLoading}
        goBack={() => {
          setFormStep(ADD_CLINICAL_EVALUATION_STEPS.FEEDING);
        }}
      />
    ),
  };

  return <AddClinicalEvaluationContainer>{stepsRecord[formStep]}</AddClinicalEvaluationContainer>;
};

export { AddClinicalEvaluation };
