import { _post } from '../client/client';
import { LoginDto } from '../types/dto/loginDto.type';

const loginUser = async (loginData: LoginDto) => {
  const response = await _post<any, LoginDto>('/api/auth/login', loginData);
  return response.data;
};

export { loginUser };
