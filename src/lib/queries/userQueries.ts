import { useQuery } from '@tanstack/react-query';
import { getUser } from '../services/userService';

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });
};
