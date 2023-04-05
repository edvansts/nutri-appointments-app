import axios, { InternalAxiosRequestConfig } from 'axios';
import { API_URL } from '@env';
import { useTokenStore } from '../../store/token';

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = useTokenStore.getState().token;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
};

const CLIENT_API = axios.create({ baseURL: API_URL });

CLIENT_API.interceptors.request.use(requestInterceptor);

export { CLIENT_API };
