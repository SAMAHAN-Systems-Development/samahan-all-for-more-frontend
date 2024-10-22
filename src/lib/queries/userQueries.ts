/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { useQuery } from '@tanstack/react-query';

import { getUser } from '../services/userService';

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser,
  });
};
