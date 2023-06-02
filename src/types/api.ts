import { AxiosError } from 'axios';

export interface DefaultData<T> {
  arg: T;
}

export interface ErrorWithMessage<T = { message?: string }> extends AxiosError<T> {
  message: string;
}
