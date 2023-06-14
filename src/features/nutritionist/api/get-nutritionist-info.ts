import { CLIENT_API } from '@config/axios/api-client';
import { useQuery } from '@tanstack/react-query';
import { GET_NUTRITIONIST_INFO } from './cache';
import { type GetNutritionistInfoData } from './types';

const getNutritionistInfo = async (personId: string) => {
  const response = await CLIENT_API.get<GetNutritionistInfoData>(
    `/nutritionist/person/${personId}`
  );

  return response.data;
};

const useGetNutritionistInfo = (personId?: string) => {
  return useQuery({
    queryKey: [GET_NUTRITIONIST_INFO, personId],
    queryFn: async () => await getNutritionistInfo(personId || ''),
    enabled: !!personId,
  });
};

export { useGetNutritionistInfo };
