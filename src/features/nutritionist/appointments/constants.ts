import { type APPOINTMENT_TYPE } from '@constants/appointments';

export const APPOINTMENT_TYPE_LABEL: Record<APPOINTMENT_TYPE, string> = {
  SCHEDULED: 'Agendadas',
  CANCELED: 'Canceladas',
  FINISHED: 'Finalizadas',
};
