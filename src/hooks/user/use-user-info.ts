import { useTokenStore } from '@store/token';
import { useGetUserInfo } from 'src/api/get-user-info';

const useUserInfo = () => {
  const { token } = useTokenStore();

  const hasToken = !!token;

  const {
    data: user,
    isLoading,
    error,
    isValidating,
    mutate,
  } = useGetUserInfo({
    enabled: hasToken,
  });

  return { user, isLoading, error, isValidating, mutate };
};

export { useUserInfo };