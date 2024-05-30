import FormCreateCompany from "./FormCreateCompany/form-create-company";
import FormProfile from "./FormProfile/form-profile";
import SelectModeIngress from "./SelectModeIngress/select-mode-ingress";
import StepModeInvite from "./SelectModeIngress/step-mode-ingress-invite";

const StepsFormController = ({
  currentOnboardStep,
  stepModeIngress,
  setCurrentOnboardStep,
  setStepModeIngress,
  profile,
  user,
}: {
  currentOnboardStep: number;
  setCurrentOnboardStep?: any;
  stepModeIngress: string;
  setStepModeIngress?: any;
  profile: any;
  user: any;
}) => {
  return (
    <div className="w-full h-full flex  items-center justify-center">
      {!profile ? (
        <FormProfile
          user={user}
          setCurrentOnboardStep={setCurrentOnboardStep}
        />
      ) : profile && currentOnboardStep === 2 ? (
        <SelectModeIngress
          setStepModeIngress={setStepModeIngress}
          setCurrentOnboardStep={setCurrentOnboardStep}
          stepModeIngress={stepModeIngress}
        />
      ) : (
        <>
          {stepModeIngress === "new" ? (
            <FormCreateCompany
              profile={profile}
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
