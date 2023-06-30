import { requiredError } from '@constants/form';
import { ALCOHOLIC_STATUS } from '@constants/patient';
import { boolean, nativeEnum, object, string } from 'zod';

export enum ADD_PATIENT_FORM_STEPS {
  MEDICATIONS_AND_ADDICTIONS = 'MEDICATIONS_AND_ADDICTIONS',
  LIFESTYLE = 'LIFESTYLE',
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
