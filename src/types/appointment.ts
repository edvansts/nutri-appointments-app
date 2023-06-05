import { type Nutritionist } from './nutritionist';
import { type Patient } from './patient';

export interface Appointment {
  id: string;
  appointmentDate: string;
  patientId: string;
  nutritionistId: string;
  patient?: Patient;
  nutritionist?: Nutritionist;
}
