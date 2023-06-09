import { type GetPatientsByNameResponse, type GetPatientsByNameParams } from './types';
import { CLIENT_API } from '@config/axios/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GET_PATIENTS_BY_NAME_CACHE } from './cache';

const getPatientsByName = async (params: GetPatientsByNameParams, offset: number) => {
  const response = await CLIENT_API.get<GetPatientsByNameResponse>('/patient/list', {
    params: { ...params, offset },
  });

  const totalCount = Number(response.headers['x-total-count']);

  return { patients: response.data, totalCount };
};

const useGetPatientsByName = (params: GetPatientsByNameParams) => {
  return useInfiniteQuery({
    queryKey: [GET_PATIENTS_BY_NAME_CACHE, params],
    queryFn: async ({ pageParam: offset = 0 }) => await getPatientsByName(params, offset),
    getNextPageParam: (lastPage, pages) => {
      const newOffset = pages.length * params.limit;

      if (newOffset > lastPage.totalCount) {
        return undefined;
      }

      return newOffset;
    },
  });
};

// {
//   queryKey: [GET_PATIENTS_BY_NAME_CACHE, params],
//   queryFn: async ({ pageParam: offset = 0 }) => await getPatientsByName(params, offset),
//   defaultPageParam: 0,
//   getNextPageParam: (lastPage, pages) => {
//     const newOffset = pages.length * params.limit;

//     if (newOffset > lastPage.totalCount) {
//       return undefined;
//     }

//     return newOffset;
//   },
// }

export { useGetPatientsByName };
