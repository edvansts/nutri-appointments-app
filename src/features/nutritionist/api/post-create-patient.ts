import { type UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';
import { CLIENT_API } from '@config/axios/api-client';
import { GET_PATIENTS_BY_NAME_CACHE } from './cache';
import { type PostCreatePatientParams, type PostCreatePatientResponse } from './types';
import { type ErrorWithMessage } from 'src/types/api';
import { handleThrowApiError } from '@utils/api';

const postCreatePatient = async (params: PostCreatePatientParams) => {
  return await CLIENT_API.post<PostCreatePatientResponse>('/patient', params)
    .then((response) => response.data)
    .catch(handleThrowApiError(undefined, { showToast: true }));
};

const usePostCreatePatient = (
  options: Omit<
    UseMutationOptions<
      PostCreatePatientResponse,
      ErrorWithMessage,
      PostCreatePatientParams,
      string | unknown
    >,
    'mutationFn'
  > = {}
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCreatePatient,
    ...options,
    onSuccess: (...args) => {
      options.onSuccess?.(...args);

      queryClient.invalidateQueries([GET_PATIENTS_BY_NAME_CACHE], { exact: false });
    },
  });
};

export { usePostCreatePatient };
