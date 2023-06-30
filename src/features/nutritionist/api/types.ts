import { type APPOINTMENT_TYPE } from '@constants/appointments';
import {
  type CIVIL_STATUS,
  type ETHNICITY,
  type GENDER,
  type SCHOOLING,
  type SEX,
} from '@constants/patient';
import { type Appointment } from 'src/types/appointment';
import { type Nutritionist } from 'src/types/nutritionist';
import { type BodyEvolution, type Patient } from 'src/types/patient';

export interface GetNextNutritionistAppointmentsParams {
  type: APPOINTMENT_TYPE;
  limit: number;
  nutritionistId?: string;
}
export type GetNextNutritionistAppointmentsResponse = Appointment[];

export interface GetPatientsByNameParams {
  limit: number;
  patientName?: string;
}
export type GetPatientsByNameResponse = Patient[];

export interface GetPatientBodyEvolutionParams {
  limit: number;
  patientId: string;
}
export type GetPatientBodyEvolutionResponse = BodyEvolution[];

export type GetNutritionistInfoData = Nutritionist;

export interface PostCreatePatientParams {
  name: string;
  birthdayDate: string;
  sex: SEX;
  gender: GENDER;
  civilStatus: CIVIL_STATUS;
  nationality: string;
  naturality: string;
  ethnicity: ETHNICITY;
  schooling: SCHOOLING;
  profession: string;
  completeAddress: string;
  phoneNumber: string;
  cpf: string;
  socialName?: string;
}

export type PostCreatePatientResponse = Patient;
