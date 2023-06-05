import { type Appointment } from 'src/types/appointment';

export interface GetNextNutritionistAppointmentsParams {
  type: 'SCHEDULED' | 'CANCELED' | 'FINISHED';
  offset: number;
  limit: number;
  nutritionistId?: string;
}
export type GetNextNutritionistAppointmentsResponse = Appointment[];
