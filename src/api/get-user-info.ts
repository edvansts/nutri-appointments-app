import { CLIENT_API } from '../config/axios/api-client';
import { type User } from 'src/types/user';
import { useQuery } from '@tanstack/react-query';
import { GET_USER_INFO_CACHE } from './cache';

const getUserInfo = async () => {
  const response = await CLIENT_API.get<User>('/auth/user-info');

  return response.data;
};

const useGetUserInfo = ({
  enabled = true,
}: {
  enabled?: boolean;
} = {}) => {
  return useQuery({
    queryFn: async () => await getUserInfo(),
    enabled,
    queryKey: [GET_USER_INFO_CACHE],
  });
};

export { useGetUserInfo };
