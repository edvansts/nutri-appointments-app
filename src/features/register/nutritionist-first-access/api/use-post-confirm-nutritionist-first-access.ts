import { type AxiosError } from 'axios';
import useSwrMutation, { type SWRMutationConfiguration } from 'swr/mutation';
import { CLIENT_API } from '../../../../config/axios/api-client';
import { type DefaultData, type ErrorWithMessage } from '../../../../types/api';
import { type Nutritionist } from '../../../../types/nutritionist';

interface PostCheckNutritionistFirstAccessParams {
  name: string;
  birthdayDate: string;
  crn: string;
}

const url = '/nutritionist/check-first-access';

const postCheckNutritionistFirstAccess = async (
  url: string,
  { arg }: DefaultData<PostCheckNutritionistFirstAccessParams>
) => {
  const data = arg;

  return await CLIENT_API.post<Nutritionist>(url, data)
    .then((response) => response.data)
    .catch((err) => {
      const error: ErrorWithMessage = {
        ...(err as AxiosError),
        message: 'Não foi possível localizar seu pré-cadastro',
      };

      throw error;
    });
};

const usePostCheckNutritionistFirstAccess = (
  options: SWRMutationConfiguration<
    Nutritionist,
    ErrorWithMessage,
    PostCheckNutritionistFirstAccessParams,
    string,
    any
  > = {}
) => {
  const { trigger, isMutating, data, error, reset } = useSwrMutation(
    url,
    postCheckNutritionistFirstAccess,
    { ...options, throwOnError: false }
  );

  return {
    checkNutritionistFirstAccess: trigger,
    isLoading: isMutating,
    data,
    error,
    reset,
  };
};

export { usePostCheckNutritionistFirstAccess };
