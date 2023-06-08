import useSWRInfinite from 'swr/infinite';
import { type GetPatientsByNameResponse, type GetPatientsByNameParams } from './types';
import { CLIENT_API } from '@config/axios/api-client';

const url = '/patient/list';

const getPatientsByName = async ([params, url, offset]: [
  GetPatientsByNameParams,
  string,
  number
]) => {
  const response = await CLIENT_API.get<GetPatientsByNameResponse>(url, {
    params: { ...params, offset },
  });

  console.log('request');

  const totalCount = Number(response.headers['x-total-count']);

  return { patients: response.data, totalCount };
};

const useGetPatientsByName = (params: GetPatientsByNameParams) => {
  return useSWRInfinite(
    (pageIndex, previousPageData) => {
      const offset = pageIndex * params.limit;

      if (pageIndex > 0 && previousPageData && offset > previousPageData.totalCount) {
        return null;
      }

      console.log('passed');

      return [params, url, offset];
    },
    getPatientsByName,
    { revalidateFirstPage: true }
  );
};

export { useGetPatientsByName };
