import React from "react";

const UnitPage = ({
  params,
}: {
  params: { companySlug: string; unitSlug: string };
}) => {
  return (
    <>
      <h1>
        {params.unitSlug} {params.companySlug}
      </h1>
    </>
  );
};

export default UnitPage;
