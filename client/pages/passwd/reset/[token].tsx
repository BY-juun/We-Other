import { ContentWrapper } from "Layouts/Content/styles";
import PasswdResetTemplate from "components/Templates/PasswdReset";
import React from "react";
import { ResetWrapper } from "./styles";

const reset = () => {
  return (
    <ContentWrapper>
      <ResetWrapper>
        <PasswdResetTemplate />
      </ResetWrapper>
    </ContentWrapper>
  );
};

export default reset;
