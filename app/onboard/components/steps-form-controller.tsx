import FormCreateCompany from "./FormCreateCompany/form-create-company";
import FormUser from "./FormUser/form-user";
import SelectModeIngress from "./SelectModeIngress/select-mode-ingress";
import StepModeInvite from "./SelectModeIngress/step-mode-ingress-invite";

const StepsFormController = ({
  currentOnboardStep,
  stepModeIngress,
  setCurrentOnboardStep,
  setStepModeIngress,
  user,
}: {
  currentOnboardStep: number;
  setCurrentOnboardStep?: any;
  stepModeIngress: string;
  setStepModeIngress?: any;
  user: any;
}) => {
  return (
    <div className="w-full h-full flex  items-center justify-center">
      {!user.cpf ? (
        <FormUser
          user={user}
          setCurrentOnboardStep={setCurrentOnboardStep}
        />
      ) : user.cpf && currentOnboardStep === 2 ? (
        <SelectModeIngress
          setStepModeIngress={setStepModeIngress}
          setCurrentOnboardStep={setCurrentOnboardStep}
          stepModeIngress={stepModeIngress}
        />
      ) : (
        <>
          {stepModeIngress === "new" ? (
            <FormCreateCompany
              user={user}
              setCurrentOnboardStep={setCurrentOnboardStep}
            />
          ) : (
            <StepModeInvite stepCurrentOnboardStep={currentOnboardStep} />
          )}
        </>
      )}
    </div>
  );
};

export default StepsFormController;
