import { useSignUp } from "Hooks/User";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "store/rootReducer";
import { SignUpState } from "store/slices/SignUp";
import SignUpStepper from "../SignUpStepper";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import { SignUpContainer, Stepper } from "./styles";

const SignUpBlock: () => JSX.Element = () => {
  const { step } = useSelector<ReducerType, SignUpState>((state) => state.signupSlice);
  const signupMutation = useSignUp();
  useEffect(() => {
    if (step === 3) signupMutation.mutate();
  }, [step]);
  return (
    <SignUpContainer>
      <Stepper>
        <SignUpStepper />
      </Stepper>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
    </SignUpContainer>
  );
};

export default SignUpBlock;
