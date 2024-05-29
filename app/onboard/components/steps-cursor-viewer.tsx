"use client";

import React from "react";

const StepsViewer = ({
  currentOnboardStep,
}: {
  currentOnboardStep: number;
}) => {
  console.log(currentOnboardStep);

  return (
    <div className="flex w-full justify-center lg:mt-8">
      <div className="flex items-center gap-3 ">
        <div className="w-10 h-1  rounded bg-accent overflow-hidden ">
          <div
            className={`${
              currentOnboardStep <= 1 ? "w-1/2 " : "w-full"
            } h-full bg-primary`}
          ></div>
        </div>
        <div className="w-10 h-1 bg-accent  rounded">
          {currentOnboardStep > 1 && (
            <div
              className={`${
                currentOnboardStep === 2 ? "w-1/2 " : "w-full"
              } h-full bg-primary`}
            ></div>
          )}
        </div>
        <div className="w-10 h-1 bg-accent rounded">
          {currentOnboardStep > 2 && (
            <div
              className={`${
                currentOnboardStep === 3 ? "w-1/2 " : "w-full"
              } h-full bg-primary`}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepsViewer;
