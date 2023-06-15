import { type SelectOption } from '@components/select';
import { requiredError } from '@constants/form';
import { CIVIL_STATUS, ETHNICITY, GENDER, SCHOOLING, SEX, SEX_LABEL } from '@constants/patient';
import { isValidCPF } from '@utils/validate';
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
  phoneNumber: string({ required_error: requiredError }),
  cpf: string({ required_error: requiredError }).refine(isValidCPF, 'CPF inválido'),
});

export const SEX_OPTIONS: Array<SelectOption<SEX>> = Object.values(SEX).map((sex) => ({
  label: SEX_LABEL[sex],
  value: sex,
  key: sex,
}));
