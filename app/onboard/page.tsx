"use server";
import React, { Suspense } from "react";
import OnboardContainer from "./components/onboard-container";
import { getUser } from "@/shared/lib/requsitions";

const Onboard = () => {
  const user = getUser();

  return (
    <div className="w-screen h-screen border-b-2 border-primary">
      <Suspense fallback={<div>Loading...</div>}>
        <OnboardContainer user={user} />
      </Suspense>
    </div>
  );
};

export default Onboard;
