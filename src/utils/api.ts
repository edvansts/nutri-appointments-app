/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AxiosError } from 'axios';
import { type ErrorWithMessage } from 'src/types/api';

export const handleThrowApiError = (errorMessage = '') => {
  return (err: AxiosError<any>) => {
    const error: ErrorWithMessage = {
      ...err,
      message: errorMessage || err.response?.data.message || '',
    };

    throw error;
  };
};
