import React from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "store/rootReducer";
import { SignUpState } from "store/slices/SignUp";
import { Active } from "./styles";

const SignUpStepper = () => {
  const { step } = useSelector<ReducerType, SignUpState>((state) => state.signupSlice);

  return (
    <>
      {step === 1 && (
        <>
          <Active></Active>
          <div></div>
        </>
      )}
      {step === 2 && (
        <>
          <div></div>
          <Active></Active>
        </>
      )}
    </>
  );
};

export default SignUpStepper;
