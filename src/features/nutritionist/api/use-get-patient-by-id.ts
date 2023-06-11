import { CLIENT_API } from '@config/axios/api-client';
import { useQuery } from '@tanstack/react-query';
import { type Patient } from 'src/types/patient';
import { GET_PATIENT_BY_ID_CACHE } from './cache';

const getPatientById = async (patientId: string) => {
  const response = await CLIENT_API.get<Patient>(`/patient/${patientId}`);

  return response.data;
};

export const useGetPatientById = (patientId: string) => {
  return useQuery({
    queryFn: async () => await getPatientById(patientId),
    queryKey: [GET_PATIENT_BY_ID_CACHE, patientId],
  });
};
