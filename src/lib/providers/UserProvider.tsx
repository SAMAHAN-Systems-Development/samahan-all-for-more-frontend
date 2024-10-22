'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextValue {
  setUser: (user: unknown | null) => void;
  user: unknown | null;
}

interface UserProviderProps {
  children: ReactNode;
  initialUser?: unknown | null;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({
  children,
  initialUser = null,
}) => {
  const [user, setUser] = useState<unknown | null>(initialUser);

  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextValue => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
