import { type ROLE } from '../constants/user';
import { type Person } from './person';

export interface User {
  email: string;
  createdAt: Date;
  updatedAt: Date;
  personId: string;
  role: ROLE;
  isCreator: boolean;
  person: Person;
}
