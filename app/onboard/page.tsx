"use server";
import React, { Suspense } from "react";
import OnboardContainer from "./components/onboard-container";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";
import { getCurrentProfile } from "../app/actions/action";

const Onboard = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const user = session.user;

  const profile = getCurrentProfile({ id: session.user.id });

  const data = await profile;

  if (data.profile && data?.profile.CompanyUser?.length > 0) {
    redirect("/app");
  }

  return (
    <div className="w-screen h-screen border-b-2 border-primary">
      <Suspense fallback={<div>Loading...</div>}>
        <OnboardContainer
          user={user}
          profileData={profile}
        />
      </Suspense>
    </div>
  );
};

export default Onboard;
