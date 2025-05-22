import { createContext, useContext } from "react";
import { DateEventType } from "../types";

export type GlobalContextType = {
  activeFilter: DateEventType,
  setActiveFilter: (c: DateEventType) => void,
};

export const defaultCtx: GlobalContextType = {
  activeFilter: 'cinema',
  setActiveFilter: () => { }
};

export const GlobalContext = createContext(defaultCtx);
export const useGlobalContext = () => useContext(GlobalContext);