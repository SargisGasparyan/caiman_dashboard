import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

AXIOS.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.response ? error.response.data : error),
);
