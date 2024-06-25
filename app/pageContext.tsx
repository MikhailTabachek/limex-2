// app/pageContext.tsx
"use client";

import { createContext, useContext, ReactNode, useState } from 'react';

interface PageContextProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
};
