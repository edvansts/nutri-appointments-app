import { AxiosError } from 'axios';
import useSwrMutation from 'swr/mutation';
import { CLIENT_API } from '../config/axios/api-client';
import { useTokenStore } from '../store/token';
import { useUserStore } from '../store/user';
import { DefaultData } from '../types/api';
import { User } from '../types/user';

interface PostLoginParams {
  email: string;
  password: string;
}

interface PostLoginResponse {
  user: User;
  token: string;
}

const url = '/auth/login';

const postLogin = (url: string, { arg }: DefaultData<PostLoginParams>) => {
  const data = arg;

  return CLIENT_API.post<PostLoginResponse>(url, data);
};

const usePostLogin = ({ onSuccess }: { onSuccess?(): void } = {}) => {
  const { setUser } = useUserStore();
  const { setToken } = useTokenStore();

  const { trigger, isMutating, data, error, reset } = useSwrMutation(url, postLogin, {
    onSuccess: ({ data: { token, user } }) => {
      onSuccess?.();

      setToken(token);
      setUser(user);
    },
  });

  const user = data?.data;

  return {
    login: trigger,
    isLoading: isMutating,
    user,
    error: error as AxiosError | undefined,
    reset,
  };
};

export { usePostLogin };
