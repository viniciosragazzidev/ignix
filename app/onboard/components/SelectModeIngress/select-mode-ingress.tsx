"use client";

import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import React from "react";
import { BiBuilding, BiEnvelope } from "react-icons/bi";

const SelectModeIngress = ({
  setStepModeIngress,
  setCurrentOnboardStep,
  stepModeIngress,
}: {
  setStepModeIngress: any;
  setCurrentOnboardStep: any;
  stepModeIngress: any;
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          onClick={() => setStepModeIngress("new")}
          className={`bg-[#010303] col-span-1 h-52 cursor-pointer hover:bg-[#030a0ab7]  transition-all  hover:scale-[98%] ${
            stepModeIngress === "new" &&
            " bg-[#030a0a] hover:bg-[#030a0a] border-primary scale-[105%] hover:scale-[102%]"
          }`}
        >
          <div className=" flex flex-col h-full justify-center   p-3  gap-4">
            <div className="flex justify-between items-center pr-5">
              <span className="text-6xl text-primary">
                <BiBuilding />
              </span>

              <div
                className={`w-4 h-4 border-2 border-primary rounded-full ${
                  stepModeIngress === "new" &&
                  "bg-primary border-slate-950 animate-ping"
                }`}
              ></div>
            </div>
            <header className="flex flex-col gap-1">
              <span className="text-xl s font-bold ">
                Criar uma <span className="text-primary">nova empresa:</span>
              </span>

              <span className="text-sm text-muted-foreground">
                Escolha essa opção se você deseja adicionar e gerenciar uma
                empresa do zero na plataforma.
              </span>
            </header>
          </div>
        </Card>
        <Card
          onClick={() => setStepModeIngress("invite")}
          className={`bg-[#010303] col-span-1 h-52 cursor-pointer hover:bg-[#030a0ab7] transition-all  hover:scale-[98%] ${
            stepModeIngress === "invite" &&
            " bg-[#030a0a] hover:bg-[#030a0a] border-primary scale-[105%] hover:scale-[102%]"
          }`}
        >
          <div className=" flex flex-col h-full justify-center   p-3  gap-4">
            <div className="flex justify-between items-center pr-5">
              <span className="text-6xl text-primary">
                <BiEnvelope />
              </span>

              <div
                className={`w-4 h-4 border-2 border-primary rounded-full ${
                  stepModeIngress === "invite" &&
                  "bg-primary border-slate-950 animate-ping"
                }`}
              ></div>
            </div>
            <header className="flex flex-col gap-1">
              <span className="text-xl s font-bold ">
                Entrar através de{" "}
                <span className="text-primary">um convite:</span>
              </span>

              <span className="text-sm text-muted-foreground">
                Escolha essa opção se você deseja entrar em uma empresa já
                criada.
              </span>
            </header>
          </div>
        </Card>
      </div>
      <div className="flex w-full  items-end justify-end">
        <Button
          className="text-muted font-semibold w-40"
          onClick={() => setCurrentOnboardStep(3)}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default SelectModeIngress;
