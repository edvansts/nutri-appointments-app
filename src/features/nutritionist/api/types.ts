import { type APPOINTMENT_TYPE } from '@constants/appointments';
import { type Appointment } from 'src/types/appointment';

export interface GetNextNutritionistAppointmentsParams {
  type: APPOINTMENT_TYPE;
  limit: number;
  nutritionistId?: string;
}
export type GetNextNutritionistAppointmentsResponse = Appointment[];
