"use client";

import React from "react";

import InputInviteCodeContainer from "../AreaInputInviteCode/input-invite-code-container";
import AreaInputInviteEmail from "../AreaInputInviteEmail/area-input-invite-email";

const StepModeInvite = () => {
  const [send, setSend] = React.useState(false);
  return (
    <>
      {send ? (
        <InputInviteCodeContainer />
      ) : (
        <AreaInputInviteEmail setSend={setSend} />
      )}
    </>
  );
};

export default StepModeInvite;
