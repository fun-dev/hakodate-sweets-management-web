import { AxiosResponse } from 'axios';
import axios from '../axios';
import { User } from '../models/User';

type loginUserRequestBody = {
  token: string;
  user: {
    display_name: string;
  };
};

export async function createUserRequest(body: loginUserRequestBody) {
  try {
    return await axios.post<User>('/users', body);
  } catch {
    return null;
  }
}
