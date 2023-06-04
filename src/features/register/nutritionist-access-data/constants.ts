import { requiredError } from '@constants/form';
import { object, string } from 'zod';

export const NUTRITIONIST_ACCESS_DATA_FORM_SCHEMA = object({
  email: string({ required_error: requiredError }).email('Email inválido'),
  password: string({ required_error: requiredError }).min(5, 'Senha fraca'),
  confirmedPassword: string({ required_error: requiredError }),
}).refine(
  ({ confirmedPassword, password }) => confirmedPassword === password,

  { message: 'As senhas não conferem', path: ['password'] }
);
