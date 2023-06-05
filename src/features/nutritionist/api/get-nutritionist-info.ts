import useSWR from 'swr';
import { CLIENT_API } from '@config/axios/api-client';
import { type Nutritionist } from 'src/types/nutritionist';

const getUrl = (personId: string) => `/nutritionist/person/${personId}`;

const getNutritionistInfo = async (url: string) => {
  const response = await CLIENT_API.get<Nutritionist>(url);

  return response.data;
};

const useGetNutritionistInfo = (personId?: string) => {
  return useSWR(personId ? getUrl(personId) : null, getNutritionistInfo);
};

export { useGetNutritionistInfo };
