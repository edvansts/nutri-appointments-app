import { type CIVIL_STATUS, type GENDER, type SEX } from '../constants/patient';

export interface Patient {
  id: string;
  birthdayDate: string;
  sex: SEX;
  gender: GENDER;
  civilStatus: CIVIL_STATUS;
  nationality: string;
  naturality: string;
  ethnicity: string;
  schooling: string;
  profession: string;
  completeAddress: string;
  historyWeightGain: string;
  phoneNumber: string;
  personId: string;
}
