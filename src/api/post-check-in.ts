import useSwrMutation from 'swr/mutation';
import { CLIENT_API } from '../config/axios/api-client';
import { type DefaultData } from '../types/api';

interface PostCheckInParams {
  pushToken: string;
}

const url = '/auth/check-in';

const postCheckIn = async (url: string, { arg }: DefaultData<PostCheckInParams>) => {
  const data = arg;

  const response = await CLIENT_API.post<undefined>(url, data);

  return response.data;
};

const usePostCheckIn = () => {
  return useSwrMutation(url, postCheckIn);
};

export { usePostCheckIn };
