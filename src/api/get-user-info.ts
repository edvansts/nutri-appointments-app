import useSWR from 'swr';
import { CLIENT_API } from '../config/axios/api-client';
import { type User } from 'src/types/user';

export const GET_USER_INFO_URL = '/auth/user-info';

const getUserInfo = async (url: string) => {
  const response = await CLIENT_API.get<User>(url);

  return response.data;
};

const useGetUserInfo = ({
  enabled = true,
  onSuccess,
}: {
  enabled?: boolean;
  onSuccess?: () => void;
} = {}) => {
  return useSWR(enabled ? GET_USER_INFO_URL : null, getUserInfo, { onSuccess });
};

export { useGetUserInfo };
