"use server";
import React, { Suspense } from "react";
import OnboardContainer from "./components/onboard-container";
import { getUser } from "@/shared/lib/requsitions";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";
import { getCurrentProfile } from "../app/actions/action";

const Onboard = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const profile = getCurrentProfile({ id: session.user.id });

  return (
    <div className="w-screen h-screen border-b-2 border-primary">
      <Suspense fallback={<div>Loading...</div>}>
        <OnboardContainer profileData={profile} />
      </Suspense>
    </div>
  );
};

export default Onboard;
