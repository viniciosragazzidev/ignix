"use client";
import { createContext, useState } from "react";

export interface AppContextProps {
  currentUnit?: string;
  setCurrentUnit: (unit: string) => void;
  currentCompany?: string;
  setCurrentCompany: (company: string) => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

function AppContextWrapper({ children }: { children: React.ReactNode }) {
  const [currentUnit, setCurrentUnit] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  return (
    <AppContext.Provider
      value={{
        currentUnit,
        setCurrentUnit,
        currentCompany,
        setCurrentCompany,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextWrapper };
