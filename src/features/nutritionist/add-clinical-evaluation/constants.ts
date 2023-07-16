import { requiredError } from '@constants/form';
import { ALCOHOLIC_STATUS, EATING_BEHAVIOR, EATING_PLACE, ENVIRONMENT } from '@constants/patient';
import { type TypeOf, boolean, nativeEnum, object, string } from 'zod';

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
