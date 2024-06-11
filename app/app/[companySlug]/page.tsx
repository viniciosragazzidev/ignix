"use server";
import { Badge } from "@/shared/components/ui/badge";

import React, { Suspense } from "react";
import UnitsList from "./_components/UnitsList";
import { getUnitsCompany } from "./_actions/action";
import NavbarApp from "./_components/navbar-app";
import { auth } from "@/services/auth";

const App = async ({
  params,
}: {
  params: { companySlug: string; unitSlug: string };
}) => {
  const units = await getUnitsCompany();

  return (
    <div className="app w-full h-full min-h-[calc(100vh-76px)] flex justify-center items-center border-b-2 border-b-primary">
      <div className="container max-w-lg">
        <div className="flex flex-col gap-6   p-6 rounded-md h-min">
          <header className="border-b border-b-primary/10 py-3 ">
            <h1 className="text-3xl font-bold">
              Selecione uma <span className="text-primary">unidade</span>.
            </h1>
            <p className="text-sm text-muted-foreground">
              Escolhe qual unidade você deseja acessar no sistema.
            </p>
          </header>

          <div className=" w-full flex flex-col gap-4">
            <header className="flex w-full justify-between">
              <h3 className=" font-bold">Unidades</h3>
              <Badge className="bg-accent text-accent-foreground hover:bg-accent">
                Status
              </Badge>
            </header>

            <UnitsList
              units={units}
              companySlug={params.companySlug}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
