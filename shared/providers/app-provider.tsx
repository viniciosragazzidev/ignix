import React from "react";
import { HibridToaster } from "./HibridToast";
import { AppContextWrapper } from "../context/AppContext";

interface AppComponentProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppComponentProps) => {
  return (
    <AppContextWrapper>
      <HibridToaster />

      {children}
    </AppContextWrapper>
  );
};

export default AppProvider;
