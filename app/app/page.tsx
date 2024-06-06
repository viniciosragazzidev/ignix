import { auth } from "@/services/auth";
import React from "react";
import { redirect } from "next/navigation";

const App = async () => {
  const session = await auth();
  if (!session) return;

  const user = session.user;

  if (user?.CompanyUser?.length === 0) {
    redirect("/onboard");
  }

  if (user && user.CompanyUser[0].slugId) {
    redirect(`/app/${user.CompanyUser[0].slugId}`);
  }

  return;
};

export default App;
