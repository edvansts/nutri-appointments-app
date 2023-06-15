import { type TypeOf } from 'zod';
import { type PERSONAL_DATA_FORM_SCHEMA } from './constants';

export type PersonalDataFormType = TypeOf<typeof PERSONAL_DATA_FORM_SCHEMA>;
