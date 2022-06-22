import React from "react";
import { useRecoilValue } from "recoil";
import { SignUpStep } from "store/signup";
import { Active } from "./styles";

const SignUpStepper = () => {
  const step = useRecoilValue(SignUpStep);
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
