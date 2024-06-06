"use server";
import React, { Suspense } from "react";
import OnboardContainer from "./components/onboard-container";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

const Onboard = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const user: any = session.user;

  ////console.log(session);

  if (user && user.CompanyUser?.length > 0) {
    redirect("/app");
  }

  return (
    <div className="w-screen h-screen border-b-2 border-primary">
      <Suspense fallback={<div>Loading...</div>}>
        <OnboardContainer user={user} />
      </Suspense>
    </div>
  );
};

export default Onboard;
