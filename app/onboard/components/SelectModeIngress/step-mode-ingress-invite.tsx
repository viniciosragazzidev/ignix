"use client";

import React from "react";

import InputInviteCodeContainer from "../AreaInputInviteCode/input-invite-code-container";
import AreaInputInviteEmail from "../AreaInputInviteEmail/area-input-invite-email";

const StepModeInvite = ({
  stepCurrentOnboardStep,
}: {
  stepCurrentOnboardStep: number;
}) => {
  const [send, setSend] = React.useState(false);
  return (
    <>
      {send ? (
        <InputInviteCodeContainer />
      ) : (
        <AreaInputInviteEmail
          setCurrentOnboardStep={stepCurrentOnboardStep}
          setSend={setSend}
        />
      )}
    </>
  );
};

export default StepModeInvite;
