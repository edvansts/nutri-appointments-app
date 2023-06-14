import { useUserInfo } from '@hooks/user/use-user-info';
import { useGetNutritionistInfo } from '../api/get-nutritionist-info';

const useNutritionistInfo = () => {
  const { user } = useUserInfo();

  const { data: nutritionist, isLoading, error, refetch } = useGetNutritionistInfo(user?.personId);

  return { nutritionist, isLoading, error, refetch };
};

export { useNutritionistInfo };
