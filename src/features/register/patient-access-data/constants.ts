import { requiredError } from '@constants/form';
import { object, string } from 'zod';

export const PATIENT_ACCESS_DATA_FORM_SCHEMA = object({
  email: string({ required_error: requiredError }).email('Email inválido'),
  password: string().min(5, 'Senha fraca'),
  confirmedPassword: string(),
}).refine(
  ({ confirmedPassword, password }) => confirmedPassword === password,

  { message: 'As senhas não conferem', path: ['password'] }
);
