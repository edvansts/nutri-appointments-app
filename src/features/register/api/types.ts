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
