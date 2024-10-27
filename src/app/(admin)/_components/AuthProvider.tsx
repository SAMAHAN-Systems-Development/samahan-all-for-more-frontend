'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetUser } from '@/lib/queries/userQueries';

interface UserContextType {
  user: unknown;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<unknown>(null);
  const router = useRouter();
  const {
    data: { session },
    isLoading,
  } = useGetUser();

  console.log(session);
  useEffect(() => {
    const checkUser = () => {
      console.log(session);
      if (!session) {
        router.push('/login');
      }
      setUser(session);
    };

    checkUser();
  }, [session]);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
