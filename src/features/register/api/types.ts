import { type User } from 'src/types/user';

export interface PostConfirmNutritionistAccessDataParams {
  name: string;
  birthdayDate: string;
  crn: string;
  email: string;
  password: string;
}

export interface PostConfirmNutritionistAccessDataResponse {
  user: User;
  token: string;
}

export interface PostConfirmPatientAccessDataParams {
  name: string;
  birthdayDate: string;
  cpf: string;
  email: string;
  password: string;
}

export interface PostConfirmPatientAccessDataResponse {
  user: User;
  token: string;
}
