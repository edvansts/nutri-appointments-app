import { type UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';
import { CLIENT_API } from '@config/axios/api-client';
import { GET_PATIENTS_BY_NAME_CACHE } from './cache';
import {
  type PostCreateClinicalEvaluationParams,
  type PostCreateClinicalEvaluationResponse,
} from './types';
import { type ErrorWithMessage } from 'src/types/api';
import { handleThrowApiError } from '@utils/api';

const postCreateClinicalEvaluation = async ({
  patientId,
  ...params
}: PostCreateClinicalEvaluationParams) => {
  return await CLIENT_API.post<PostCreateClinicalEvaluationResponse>(
    `/patient/${patientId}/clinical-evaluation`,
    params
  )
    .then((response) => response.data)
    .catch(handleThrowApiError(undefined, { showToast: true }));
};

const usePostCreateClinicalEvaluation = (
  options: Omit<
    UseMutationOptions<
      PostCreateClinicalEvaluationResponse,
      ErrorWithMessage,
      PostCreateClinicalEvaluationParams,
      string | unknown
    >,
    'mutationFn'
  > = {}
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCreateClinicalEvaluation,
    ...options,
    onSuccess: (...args) => {
      options.onSuccess?.(...args);

      queryClient.invalidateQueries([GET_PATIENTS_BY_NAME_CACHE], { exact: false });
    },
  });
};

export { usePostCreateClinicalEvaluation };
