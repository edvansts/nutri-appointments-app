/* eslint-disable @typescript-eslint/no-explicit-any */
import useSwrMutation, { type SWRMutationConfiguration } from 'swr/mutation';
import { CLIENT_API } from '@config/axios/api-client';
import { type DefaultData, type ErrorWithMessage } from '../../../types/api';
import { type AxiosError } from 'axios';
import {
  type PostConfirmNutritionistAccessDataParams,
  type PostConfirmNutritionistAccessDataResponse,
} from './types';

const url = '/nutritionist/first-access-setup';

const postConfirmNutritionistAccessData = async (
  url: string,
  { arg }: DefaultData<PostConfirmNutritionistAccessDataParams>
) => {
  const data = arg;

  return await CLIENT_API.post<PostConfirmNutritionistAccessDataResponse>(url, data)
    .then((response) => response.data)
    .catch((err: AxiosError<any>) => {
      const error: ErrorWithMessage = {
        ...err,
        message: err.response?.data.message || '',
      };

      throw error;
    });
};

const usePostConfirmNutritionistAccessData = (
  options: SWRMutationConfiguration<
    PostConfirmNutritionistAccessDataResponse,
    ErrorWithMessage,
    PostConfirmNutritionistAccessDataParams,
    string,
    any
  > = {}
) => {
  const { trigger, isMutating, data, error, reset } = useSwrMutation(
    url,
    postConfirmNutritionistAccessData,
    { ...options, throwOnError: false }
  );

  return {
    postConfirmNutritionistAccessData: trigger,
    isLoading: isMutating,
    data,
    error,
    reset,
  };
};

export { usePostConfirmNutritionistAccessData };
