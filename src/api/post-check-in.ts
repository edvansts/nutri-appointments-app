import { CLIENT_API } from '../config/axios/api-client';
import { useMutation } from '@tanstack/react-query';

interface PostCheckInParams {
  pushToken: string;
}

const postCheckIn = async (params: PostCheckInParams) => {
  const response = await CLIENT_API.post<undefined>('/auth/check-in', params);

  return response.data;
};

const usePostCheckIn = () => {
  return useMutation({ mutationFn: postCheckIn });
};

export { usePostCheckIn };
