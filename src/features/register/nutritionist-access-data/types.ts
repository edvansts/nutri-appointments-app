import { type TypeOf } from 'zod';
import { type NUTRITIONIST_ACCESS_DATA_FORM_SCHEMA } from './constants';

export type NutritionistDataConfirmationFormType = TypeOf<
  typeof NUTRITIONIST_ACCESS_DATA_FORM_SCHEMA
>;
