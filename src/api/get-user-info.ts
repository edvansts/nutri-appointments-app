import useSWRImmutable from 'swr/immutable';
import { CLIENT_API } from '../config/axios/api-client';
import { type User } from 'src/types/user';

const url = '/auth/user-info';

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
  return useSWRImmutable(enabled ? url : null, getUserInfo, { onSuccess });
};

export { useGetUserInfo };
