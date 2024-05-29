"use client";
import { Suspense, use, useEffect, useState } from "react";
import StepsViewer from "./steps-cursor-viewer";
import Image from "next/image";
import step1 from "@/shared/assets/images/step1.gif";
import step2 from "@/shared/assets/images/step2.gif";
import step3New from "@/shared/assets/images/step3New.gif";
import step3Exist from "@/shared/assets/images/step3Exist.gif";
import StepsFormController from "./steps-form-controller";
import { BiLoader } from "react-icons/bi";
import { useRouter } from "next/navigation";
const OnboardContainer = ({ user }: { user: any }) => {
  const userData: any = use(user);
  const [currentOnboardStep, setCurrentOnboardStep] = useState<number | null>(
    null
  );
  const [stepModeIngress, setStepModeIngress] = useState("");
  console.log(userData);

  const router = useRouter();
  useEffect(() => {
    if (!userData) {
      setCurrentOnboardStep(1);
    }

    // if (userData && userData.company) {
    //   router.push("/");
    // }
    setCurrentOnboardStep(2);

    if (userData && !userData.company) {
      setCurrentOnboardStep(2);
    }

    return;
  }, [userData]);
  return (
    <>
      {currentOnboardStep ? (
        <div className="flex max-lg:flex-col  w-full h-full overflow-x-hidden ">
          <div className="flex-1 h-full max-w-xl bg-[#010303]  p-6 px-8  flex-col justify-center flex  max-lg:hidden ">
            {!user ? (
              <>
                <header className="flex flex-col gap-2 max-lg:hidden">
                  <h1 className="text-3xl font-bold">
                    Bem vindo ao <span className="text-primary">Ignix</span>
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Estamos muito felizes em tê-lo conosco! Vamos começar com
                    algumas
                    <span className="font-semibold underline">
                      {" "}
                      informações básicas
                    </span>{" "}
                    sobre você. Não se preocupe, isso será rápido e indolor.
                  </p>
                </header>

                <div className="max-w-sm relative mt-2 overflow-hidden h-[360px]  max-lg:hidden  self-center">
                  <Image
                    src={step1}
                    alt="onboard"
                    width={1920}
                    height={1920}
                  />
                </div>
              </>
            ) : user ? (
              <>
                <header className="flex flex-col gap-2 max-lg:hidden">
                  <h1 className="text-3xl font-bold">
                    Estamos <span className="text-primary">Quase lá!</span>
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Agora precisamos saber um pouco mais sobre seus planos com a{" "}
                    Ignix. <br /> Você prefere criar sua{" "}
                    <span className="font-semibold underline">
                      própria companhia
                    </span>{" "}
                    ou{" "}
                    <span className="font-semibold underline">
                      ingressar em uma já existente
                    </span>
                    ?
                  </p>
                </header>
                <div className="max-w-sm relative mt-2 overflow-hidden h-[360px]  max-lg:hidden  self-center">
                  <Image
                    src={step2}
                    alt="onboard"
                    width={1920}
                    height={1920}
                  />
                </div>
              </>
            ) : (
              <>
                {stepModeIngress === "new" ? (
                  <>
                    <header className="flex flex-col gap-2 max-lg:hidden">
                      <h1 className="text-3xl font-bold text-primary">
                        Fantástico!
                      </h1>
                      <p className="text-sm text-muted-foreground">
                        Você escolheu criar uma nova companhia. Vamos precisar
                        de algumas informações para dar o pontapé inicial.
                      </p>
                    </header>
                    <div className="max-w-sm relative mt-2 overflow-hidden h-[360px]  max-lg:hidden  self-center">
                      <Image
                        src={step3New}
                        alt="onboard"
                        width={1920}
                        height={1920}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <header className="flex flex-col gap-2 max-lg:hidden">
                      <h1 className="text-3xl font-bold ">
                        Ótima <span className="text-primary">escolha!</span>
                      </h1>
                      <p className="text-sm text-muted-foreground">
                        Você escolheu ingressar em uma companhia já existente.
                        Tudo o que precisamos agora é o código de convite da
                        empresa.
                      </p>
                    </header>
                    <div className="max-w-sm relative mt-2 overflow-hidden h-[360px]  max-lg:hidden  self-center">
                      <Image
                        src={step3Exist}
                        alt="onboard"
                        width={1920}
                        height={1920}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="flex-1 h-max lg:h-full flex flex-col gap-10 lg:overflow-hidden relative max-lg:py-10 px-8">
            <StepsViewer currentOnboardStep={currentOnboardStep} />
            <StepsFormController
              currentOnboardStep={currentOnboardStep}
              setCurrentOnboardStep={setCurrentOnboardStep}
              user={userData}
              stepModeIngress={stepModeIngress}
              setStepModeIngress={setStepModeIngress}
            />
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center ">
          <span className="text-5xl text-primary animate-spin">
            <BiLoader />
          </span>
        </div>
      )}
    </>
  );
};

export default OnboardContainer;