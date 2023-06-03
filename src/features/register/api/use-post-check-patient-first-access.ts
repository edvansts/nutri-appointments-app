/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AxiosError } from 'axios';
import useSwrMutation, { type SWRMutationConfiguration } from 'swr/mutation';
import { CLIENT_API } from '@config/axios/api-client';
import { type DefaultData, type ErrorWithMessage } from '../../../types/api';
import { type Patient } from 'src/types/patient';

interface PostCheckPatientFirstAccessParams {
  name: string;
  birthdayDate: string;
  cpf: string;
}

const url = '/patient/check-first-access';

const postCheckPatientFirstAccess = async (
  url: string,
  { arg }: DefaultData<PostCheckPatientFirstAccessParams>
) => {
  const data = arg;

  return await CLIENT_API.post<Patient>(url, data)
    .then((response) => response.data)
    .catch((err) => {
      const error: ErrorWithMessage = {
        ...(err as AxiosError),
        message: 'Não foi possível localizar seu pré-cadastro',
      };

      throw error;
    });
};

const usePostCheckPatientFirstAccess = (
  options: SWRMutationConfiguration<
    Patient,
    ErrorWithMessage,
    PostCheckPatientFirstAccessParams,
    string,
    any
  > = {}
) => {
  const { trigger, isMutating, data, error, reset } = useSwrMutation(
    url,
    postCheckPatientFirstAccess,
    { ...options, throwOnError: false }
  );

  return {
    postCheckPatientFirstAccess: trigger,
    isLoading: isMutating,
    data,
    error,
    reset,
  };
};

export { usePostCheckPatientFirstAccess };
