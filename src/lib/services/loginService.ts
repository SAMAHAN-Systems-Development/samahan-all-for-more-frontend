/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { _post } from '../client/client';
import { LoginDto } from '../types/dto/loginDto.type';

const loginUser = async (loginData: LoginDto) => {
  const response = await _post<any, LoginDto>('/api/auth/login', loginData);
  return response.data;
};

export { loginUser };
