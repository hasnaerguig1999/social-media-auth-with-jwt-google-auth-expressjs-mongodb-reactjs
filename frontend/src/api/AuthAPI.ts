import axios from 'axios';
import { RegisterT } from '../redux/store/type/AuthType';
const API_URL = 'http://localhost:8000';
axios.defaults.baseURL=API_URL


export const login = async (email: string, password: string) => {
  const response = await axios.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (user:RegisterT) => {
  const response = await axios.post('/auth/register', user);
  return response.data;
};

