import { type APPOINTMENT_TYPE } from '@constants/appointments';
import { type Appointment } from 'src/types/appointment';
import { type Patient } from 'src/types/patient';

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
