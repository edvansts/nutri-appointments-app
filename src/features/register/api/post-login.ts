/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AxiosError } from 'axios';
import { CLIENT_API } from '../../../config/axios/api-client';
import { type ErrorWithMessage } from '../../../types/api';
import { type User } from '../../../types/user';
import { handleThrowApiError } from '@utils/api';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';

interface PostLoginParams {
  email: string;
  password: string;
}

interface PostLoginResponse {
  user: User;
  token: string;
}

const postLogin = async (params: PostLoginParams) => {
  return await CLIENT_API.post<PostLoginResponse>(`/auth/login`, params)
    .then((response) => response.data)
    .catch(handleThrowApiError());
};

const usePostLogin = (
  options: Omit<
    UseMutationOptions<PostLoginResponse, ErrorWithMessage, PostLoginParams, string>,
    'mutationFn'
  > = {}
) => {
  const { mutate, isLoading, data, error, reset } = useMutation({
    mutationFn: postLogin,
    ...options,
  });

  return {
    postLogin: mutate,
    isLoading,
    data,
    error: error as AxiosError | undefined,
    reset,
  };
};

export { usePostLogin };
