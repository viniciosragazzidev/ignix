import React from "react";

const UnitPage = ({
  params,
}: {
  params: { companySlug: string; unitySlug: string };
}) => {
  return (
    <>
      <h1>
        {params.unitySlug} {params.companySlug}
      </h1>
    </>
  );
};

export default UnitPage;
