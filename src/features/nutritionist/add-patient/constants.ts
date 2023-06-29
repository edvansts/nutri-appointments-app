import { type SelectOption } from '@components/select';
import { requiredError } from '@constants/form';
import {
  CIVIL_STATUS,
  CIVIL_STATUS_LABEL,
  ETHNICITY,
  ETHNICITY_LABEL,
  GENDER,
  GENDER_LABEL,
  SCHOOLING,
  SCHOOLING_LABEL,
  SEX,
  SEX_LABEL,
} from '@constants/patient';
import { PHONE_NUMBER_REGEX, isValidCPF } from '@utils/validate';
import { date, nativeEnum, object, string } from 'zod';

export enum ADD_PATIENT_FORM_STEPS {
  PERSONAL_DATA = 'PERSONAL_DATA',
}

export const PERSONAL_DATA_FORM_SCHEMA = object({
  name: string({ required_error: requiredError }),
  socialName: string().optional(),
  sex: nativeEnum(SEX, { required_error: requiredError }),
  gender: nativeEnum(GENDER, { required_error: requiredError }),
  civilStatus: nativeEnum(CIVIL_STATUS, { required_error: requiredError }),
  ethinicity: nativeEnum(ETHNICITY, { required_error: requiredError }),
  schooling: nativeEnum(SCHOOLING, { required_error: requiredError }),
  profession: string({ required_error: requiredError }),
  nationality: string({ required_error: requiredError }),
  birthdayDate: date({ required_error: requiredError }),
  address: string({ required_error: requiredError }),
  phoneNumber: string({ required_error: requiredError }).regex(
    PHONE_NUMBER_REGEX,
    'Número inválido'
  ),
  cpf: string({ required_error: requiredError }).refine(isValidCPF, 'CPF inválido'),
});

export const SEX_OPTIONS: Array<SelectOption<SEX>> = Object.values(SEX).map((sex) => ({
  label: SEX_LABEL[sex],
  value: sex,
  key: sex,
}));

export const GENDER_OPTIONS: Array<SelectOption<GENDER>> = Object.values(GENDER).map((gender) => ({
  label: GENDER_LABEL[gender],
  value: gender,
  key: gender,
}));

export const CIVIL_STATUS_OPTIONS: Array<SelectOption<CIVIL_STATUS>> = Object.values(
  CIVIL_STATUS
).map((civilStatus) => ({
  label: CIVIL_STATUS_LABEL[civilStatus],
  value: civilStatus,
  key: civilStatus,
}));

export const ETHNICITY_OPTIONS: Array<SelectOption<ETHNICITY>> = Object.values(ETHNICITY).map(
  (ethnicity) => ({
    label: ETHNICITY_LABEL[ethnicity],
    value: ethnicity,
    key: ethnicity,
  })
);

export const SCHOOLING_OPTIONS: Array<SelectOption<SCHOOLING>> = Object.values(SCHOOLING).map(
  (schooling) => ({
    label: SCHOOLING_LABEL[schooling],
    value: schooling,
    key: schooling,
  })
);
