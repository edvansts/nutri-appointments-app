import { type TypeOf } from 'zod';
import { type PATIENT_ACCESS_DATA_FORM_SCHEMA } from './constants';

export type PatientDataConfirmationFormType = TypeOf<typeof PATIENT_ACCESS_DATA_FORM_SCHEMA>;
