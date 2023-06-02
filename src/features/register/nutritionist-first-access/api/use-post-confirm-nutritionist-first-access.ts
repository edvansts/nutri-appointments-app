import { AxiosError } from 'axios';
import useSwrMutation, { SWRMutationConfiguration } from 'swr/mutation';
import { CLIENT_API } from '../../../../config/axios/api-client';
import { DefaultData, ErrorWithMessage } from '../../../../types/api';
import { Nutritionist } from '../../../../types/nutritionist';

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

  return CLIENT_API.post<Nutritionist>(url, data)
    .then((response) => response.data)
    .catch((err) => {
      throw {
        ...(err as AxiosError),
        message: 'Não foi possível localizar seu pré-cadastro',
      } as ErrorWithMessage;
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
    options
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
