import useSWR from 'swr';
import {
  type GetNextNutritionistAppointmentsResponse,
  type GetNextNutritionistAppointmentsParams,
} from './types';
import { CLIENT_API } from '@config/axios/api-client';

const getUrl = (nutritionistId: string) => `/nutritionist/${nutritionistId}/next-appointments`;

const getNextNutritionistAppointments = async ([url, params]: [
  string,
  GetNextNutritionistAppointmentsParams
]) => {
  const response = await CLIENT_API.get<GetNextNutritionistAppointmentsResponse>(url, { params });

  const totalCount = response.headers['x-total-count'];

  return { appointments: response.data, totalCount };
};

const useGetNextNutritionistAppointments = (params: GetNextNutritionistAppointmentsParams) => {
  return useSWR(
    params.nutritionistId ? [getUrl(params.nutritionistId), params] : null,
    getNextNutritionistAppointments
  );
};

export { useGetNextNutritionistAppointments };
