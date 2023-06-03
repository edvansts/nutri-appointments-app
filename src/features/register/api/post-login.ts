/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AxiosError } from 'axios';
import useSwrMutation, { type SWRMutationConfiguration } from 'swr/mutation';
import { CLIENT_API } from '../../../config/axios/api-client';
import { type ErrorWithMessage, type DefaultData } from '../../../types/api';
import { type User } from '../../../types/user';
import { handleThrowApiError } from '@utils/api';

interface PostLoginParams {
  email: string;
  password: string;
}

interface PostLoginResponse {
  user: User;
  token: string;
}

const url = '/auth/login';

const postLogin = async (url: string, { arg }: DefaultData<PostLoginParams>) => {
  const data = arg;

  return await CLIENT_API.post<PostLoginResponse>(url, data)
    .then((response) => response.data)
    .catch(handleThrowApiError());
};

const usePostLogin = (
  options: SWRMutationConfiguration<
    PostLoginResponse,
    ErrorWithMessage,
    PostLoginParams,
    string,
    any
  > = {}
) => {
  const { trigger, isMutating, data, error, reset } = useSwrMutation(url, postLogin, {
    ...options,
    throwOnError: false,
  });

  return {
    postLogin: trigger,
    isLoading: isMutating,
    data,
    error: error as AxiosError | undefined,
    reset,
  };
};

export { usePostLogin };
