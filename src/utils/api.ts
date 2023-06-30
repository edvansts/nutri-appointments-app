/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AxiosError } from 'axios';
import Toast from 'react-native-toast-message';
import { type ErrorWithMessage } from 'src/types/api';

export const handleThrowApiError = (
  errorMessage = '',
  { showToast }: { showToast?: boolean } = {}
) => {
  return (err: AxiosError<any>) => {
    const error: ErrorWithMessage = {
      ...err,
      message: errorMessage || err.response?.data.message || '',
    };

    if (showToast) {
      Toast.show({ type: 'error', text1: error.message });
    }

    throw error;
  };
};
