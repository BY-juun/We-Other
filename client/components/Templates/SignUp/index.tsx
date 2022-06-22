import SignUpTitle from "components/Atoms/SignUp/SignUpTitle";
import SignUpStepper from "components/Organisms/SignUp/SignUpStepper";
import StepOne from "components/Organisms/SignUp/StepOne";
import StepTwo from "components/Organisms/SignUp/StepTwo";
import React from "react";
import { useRecoilValue } from "recoil";
import { SignUpStep } from "store/signup";
import { SignUpContainer, Stepper } from "./styles";

const SignUpTemplates = () => {
  const step = useRecoilValue(SignUpStep);
  return (
    <>
      <SignUpTitle />
      <SignUpContainer>
        <Stepper>
          <SignUpStepper />
        </Stepper>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
      </SignUpContainer>
    </>
  );
};

export default SignUpTemplates;
