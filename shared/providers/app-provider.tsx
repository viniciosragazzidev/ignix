import React from "react";
import { HibridToaster } from "./HibridToast";

interface AppComponentProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppComponentProps) => {
  return (
    <>
      <HibridToaster />

      {children}
    </>
  );
};

export default AppProvider;
