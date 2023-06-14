import { type GetPatientBodyEvolutionResponse, type GetPatientBodyEvolutionParams } from './types';
import { CLIENT_API } from '@config/axios/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GET_PATIENT_BODY_EVOLUTION_CACHE } from './cache';

const getPatientBodyEvolution = async (
  { limit, patientId }: GetPatientBodyEvolutionParams,
  offset: number
) => {
  const response = await CLIENT_API.get<GetPatientBodyEvolutionResponse>(
    `/patient/${patientId}/body-evolution`,
    {
      params: { limit, offset },
    }
  );

  const totalCount = Number(response.headers['x-total-count']);

  return { bodyEvolutions: response.data, totalCount };
};

const useGetPatientBodyEvolution = (params: GetPatientBodyEvolutionParams) => {
  return useInfiniteQuery({
    queryKey: [GET_PATIENT_BODY_EVOLUTION_CACHE, params],
    queryFn: async ({ pageParam: offset = 0 }) => await getPatientBodyEvolution(params, offset),
    getNextPageParam: (lastPage, pages) => {
      const newOffset = pages.length * params.limit;

      if (newOffset > lastPage.totalCount) {
        return undefined;
      }

      return newOffset;
    },
  });
};

export { useGetPatientBodyEvolution };
