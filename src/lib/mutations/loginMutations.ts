import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { LoginDto } from '../types/dto/loginDto.type';
import { loginUser } from '../services/loginService';

export const useLoginUser = (
  mutationOptions: UseMutationOptions<unknown, Error, { loginData: LoginDto }>
) =>
  useMutation({
    mutationFn: ({ loginData }) => loginUser(loginData),
    ...mutationOptions,
  });
