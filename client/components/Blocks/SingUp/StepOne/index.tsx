import { useAppDispatch } from "Hooks/useAppDispatch";
import React, { useCallback, useRef } from "react";
import { gotoNextStep, setEamil, setPassword } from "store/slices/SignUp";
import { CustomInput } from "components/Atoms/CustomInput/styles";
import { AccountTitle, SignUpBtn } from "../SignUpBlock/styles";

const StepOne = () => {
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const gotoStepTwo = useCallback(() => {
    if (!emailRef.current) return alert("*이메일을 입력해주세요");
    if (!passwordRef.current) return alert("*비밀번호를 입력해주세요");
    if (!passwordCheckRef.current || passwordRef.current.value !== passwordCheckRef.current.value) return alert("*비밀번호 확인을 다시 입력해주세요");
    dispatch(gotoNextStep());
    dispatch(setEamil(emailRef.current.value));
    dispatch(setPassword(passwordRef.current.value));
  }, [gotoNextStep]);

  const inputs = [
    { text: "ID(이메일주소)", ref: emailRef, type: "email" },
    { text: "비밀번호", ref: passwordRef, type: "password" },
    { text: "비밀번호 확인", ref: passwordCheckRef, type: "password" },
  ];

  return (
    <>
      {inputs.map((input) => (
        <div key={input.text}>
          <AccountTitle>{input.text}</AccountTitle>
          <CustomInput ref={input.ref} type={input.type} />
        </div>
      ))}
      <SignUpBtn onClick={gotoStepTwo}>다음</SignUpBtn>
    </>
  );
};

export default StepOne;
