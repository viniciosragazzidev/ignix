"use client";

import React from "react";

interface AppComponentProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppComponentProps) => {
  return <>{children}</>;
};

export default AppProvider;
