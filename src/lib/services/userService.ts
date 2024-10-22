/* eslint-disable no-restricted-imports */
import { _get } from '../client/client';

export const getUser = async () => {
  const response = await _get<unknown>('/api/auth/user');
  return response;
};
