import useSWRInfinite from 'swr/infinite';
import {
  type GetNextNutritionistAppointmentsResponse,
  type GetNextNutritionistAppointmentsParams,
} from './types';
import { CLIENT_API } from '@config/axios/api-client';

const getUrl = (nutritionistId: string) => `/nutritionist/${nutritionistId}/next-appointments`;

const getNextNutritionistAppointments = async ([url, params, offset]: [
  string,
  GetNextNutritionistAppointmentsParams,
  number
]) => {
  const response = await CLIENT_API.get<GetNextNutritionistAppointmentsResponse>(url, {
    params: { ...params, offset },
  });

  const totalCount = Number(response.headers['x-total-count']);

  return { appointments: response.data, totalCount };
};

const useGetNextNutritionistAppointments = (params: GetNextNutritionistAppointmentsParams) => {
  return useSWRInfinite((pageIndex, previousPageData) => {
    if (!params.nutritionistId) {
      return null;
    }

    const offset = pageIndex * params.limit;

    if (previousPageData && offset >= previousPageData.totalCount) {
      return null;
    }

    return [getUrl(params.nutritionistId), params, offset];
  }, getNextNutritionistAppointments);
};

export { useGetNextNutritionistAppointments };
