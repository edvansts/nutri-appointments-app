import { type ROLE } from '../constants/user';

export interface User {
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  username: string;
  name: string;
  personId: string;
  role: ROLE;
  isCreator: boolean;
}
