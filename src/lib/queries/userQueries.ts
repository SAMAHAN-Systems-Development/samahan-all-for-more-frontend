import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getUser } from '../services/userService';

/* eslint-disable */
export const useGetUser = (): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });
};
