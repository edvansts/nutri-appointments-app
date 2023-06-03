/* eslint-disable @typescript-eslint/no-explicit-any */
import useSwrMutation, { type SWRMutationConfiguration } from 'swr/mutation';
import { CLIENT_API } from '@config/axios/api-client';
import { type DefaultData, type ErrorWithMessage } from '../../../types/api';
import { type AxiosError } from 'axios';
import {
  type PostConfirmPatientAccessDataParams,
  type PostConfirmPatientAccessDataResponse,
} from './types';

const url = '/patient/first-access-setup';

const postConfirmPatientAccessData = async (
  url: string,
  { arg }: DefaultData<PostConfirmPatientAccessDataParams>
) => {
  const data = arg;

  return await CLIENT_API.post<PostConfirmPatientAccessDataResponse>(url, data)
    .then((response) => response.data)
    .catch((err: AxiosError<any>) => {
      const error: ErrorWithMessage = {
        ...err,
        message: err.response?.data.message || '',
      };

      throw error;
    });
};

const usePostConfirmPatientAccessData = (
  options: SWRMutationConfiguration<
    PostConfirmPatientAccessDataResponse,
    ErrorWithMessage,
    PostConfirmPatientAccessDataParams,
    string,
    any
  > = {}
) => {
  const { trigger, isMutating, data, error, reset } = useSwrMutation(
    url,
    postConfirmPatientAccessData,
    { ...options, throwOnError: false }
  );

  return {
    postConfirmPatientAccessData: trigger,
    isLoading: isMutating,
    data,
    error,
    reset,
  };
};

export { usePostConfirmPatientAccessData };
