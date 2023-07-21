import { requiredError } from '@constants/form';
import {
  ALCOHOLIC_STATUS,
  CLINICAL_HISTORY,
  EATING_BEHAVIOR,
  EATING_PLACE,
  ENVIRONMENT,
  FAMILIAR_BACKGROUND,
  SMOKER_STATUS,
  SYMPTOM,
} from '@constants/patient';
import { type TypeOf, boolean, nativeEnum, object, string, array } from 'zod';

export enum ADD_CLINICAL_EVALUATION_STEPS {
  MEDICATIONS_AND_ADDICTIONS = 'MEDICATIONS_AND_ADDICTIONS',
  LIFESTYLE = 'LIFESTYLE',
  FEEDING = 'FEEDING',
  FAMILY_BACKGROUND = 'FAMILY_BACKGROUND',
}

export const MEDICATIONS_AND_ADDICTIONS_FORM_SCHEMA = object({
  useMedicines: boolean(),
  medicinesUsed: string().optional(),

  hasPerformedWeightLossTreatment: boolean(),
  perfomedWeightLossTreatments: string().optional(),

  alcoholicStatus: nativeEnum(ALCOHOLIC_STATUS),
  alcoholicDescription: string().optional(),

  smokerStatus: nativeEnum(SMOKER_STATUS),
  smokerDescription: string().optional(),
})
  .refine((data) => (data.useMedicines ? !!data.medicinesUsed : true), {
    message: requiredError,
    path: ['medicinesUsed'],
  })
  .refine(
    (data) => (data.hasPerformedWeightLossTreatment ? !!data.perfomedWeightLossTreatments : true),
    {
      message: requiredError,
      path: ['perfomedWeightLossTreatments'],
    }
  )
  .refine(
    (data) =>
      data.alcoholicStatus !== ALCOHOLIC_STATUS.INACTIVE ? !!data.alcoholicDescription : true,
    {
      message: requiredError,
      path: ['alcoholicDescription'],
    }
  )
  .refine(
    (data) => (data.smokerStatus !== SMOKER_STATUS.INACTIVE ? !!data.smokerDescription : true),
    {
      message: requiredError,
      path: ['smokerDescription'],
    }
  );

export type MedicationsAndAddictionsFormType = TypeOf<
  typeof MEDICATIONS_AND_ADDICTIONS_FORM_SCHEMA
>;

export const LIFESTYLE_FORM_SCHEMA = object({
  hasPhysicalActivityPractice: boolean(),
  physicalActivitiesPracticed: string().optional(),
  timePracticed: string().optional(),
  weekTimesPracticed: string().optional(),

  spareTimeDescription: string().optional(),
}).refine(
  (data) => (data.hasPhysicalActivityPractice ? !!data.hasPhysicalActivityPractice : true),
  {
    message: requiredError,
    path: ['physicalActivitiesPracticed', 'timePracticed', 'weekTimesPracticed'],
  }
);

export type LifestyleFormType = TypeOf<typeof LIFESTYLE_FORM_SCHEMA>;

export const FEEDING_FORM_SCHEMA = object({
  eatingBehavior: nativeEnum(EATING_BEHAVIOR, { required_error: requiredError }),
  breakfastPlace: nativeEnum(EATING_PLACE, { required_error: requiredError }),
  snackPlace: nativeEnum(EATING_PLACE, { required_error: requiredError }),
  lunchPlace: nativeEnum(EATING_PLACE, { required_error: requiredError }),
  afternoonSnackPlace: nativeEnum(EATING_PLACE, { required_error: requiredError }),
  dinnerPlace: nativeEnum(EATING_PLACE, { required_error: requiredError }),
  supperPlace: nativeEnum(EATING_PLACE, { required_error: requiredError }),
  mainMealsEnvironment: nativeEnum(ENVIRONMENT, { required_error: requiredError }),
});

export type FeedingFormType = TypeOf<typeof FEEDING_FORM_SCHEMA>;

export const FAMILY_BACKGROUND_FORM_SCHEMA = object({
  familiarBackgroundDiseases: array(nativeEnum(FAMILIAR_BACKGROUND)).min(1, {
    message: requiredError,
  }),
  otherFamiliarBackgroudDiseases: string().optional(),

  clinicalHistoryDiseases: array(nativeEnum(CLINICAL_HISTORY)).min(1, {
    message: requiredError,
  }),
  otherClinicalHistoryDiseases: string().optional(),

  symptomns: array(nativeEnum(SYMPTOM)).min(1, {
    message: requiredError,
  }),
  otherSymptomns: string().optional(),
});

export type FamilyBackgroundFormType = TypeOf<typeof FAMILY_BACKGROUND_FORM_SCHEMA>;
