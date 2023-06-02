import { type AxiosError } from 'axios';

export interface DefaultData<T> {
  arg: T;
}

export interface ErrorWithMessage extends AxiosError {
  message: string;
}
