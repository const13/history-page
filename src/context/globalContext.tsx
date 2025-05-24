import { createContext, useContext, useState, ReactNode } from "react";
import { DateEventType } from "../types";

export type GlobalContextType = {
  activeFilter: DateEventType;
  setActiveFilter: (filter: DateEventType) => void;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [activeFilter, setActiveFilter] = useState<DateEventType>('cinema');

  const value = {
    activeFilter,
    setActiveFilter
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};