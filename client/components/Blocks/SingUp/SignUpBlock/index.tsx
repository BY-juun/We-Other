import { CustomInput } from "components/Atoms/CustomInput/styles";
import { useRouter } from "next/router";
import React, { useCallback, useRef, useState } from "react";
import { useSignUp } from "_Query/User";
import { AccountTitle, SelectSex, SignUpBtn, SignUpContainer } from "./styles";

const SignUpBlock = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const admissionRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const [sex, setSex] = useState("");
  const router = useRouter();

  const signUpSuccess = useCallback(() => {
    alert("*회원가입에 성공하셨습니다!");
    console.log("ddddd");
    return router.push("/");
  }, [router]);

  const signupMutation = useSignUp(signUpSuccess);

  const clickSex = useCallback(
    (data: string) => () => {
      setSex(data);
    },
    []
  );

  const validationCheck = useCallback(() => {
    if (!emailRef?.current?.value) {
      return alert("*이메일을 입력해주세요");
    }
    if (!passwordRef?.current?.value) {
      return alert("*비밀번호를 입력해주세요");
    }
    if (!passwordCheckRef?.current?.value || passwordRef?.current?.value !== passwordCheckRef?.current?.value) {
      return alert("*비밀번호 확인을 다시 입력해주세요");
    }
    if (!usernameRef?.current?.value) {
      return alert("*이름을 입력해주세요");
    }
    if (!sex) {
      return alert("성별을 확인해주세요");
    }
    if (!departmentRef?.current?.value) {
      return alert("학부를 입력해주세요");
    }
    if (!admissionRef?.current?.value) {
      return alert("학번을 입력해주세요");
    }
    return true;
  }, [sex]);

  const Submit = useCallback(() => {
    if (!validationCheck()) return;
    const reqData = {
      email: emailRef?.current?.value!,
      passwd: passwordRef?.current?.value!,
      userName: usernameRef?.current?.value!,
      department: departmentRef?.current?.value!,
      sex: sex,
      admission: admissionRef?.current?.value!,
    };

    signupMutation.mutate(reqData);
  }, [sex, signupMutation, validationCheck]);

  return (
    <SignUpContainer>
      <div>
        <AccountTitle>ID(이메일주소)</AccountTitle>
        <CustomInput ref={emailRef} type="email" placeholder="" />
      </div>
      <div>
        <AccountTitle>비밀번호</AccountTitle>
        <CustomInput ref={passwordRef} type="password" placeholder="" />
      </div>
      <div>
        <AccountTitle>비밀번호 확인</AccountTitle>
        <CustomInput ref={passwordCheckRef} type="password" placeholder="" />
      </div>
      <div>
        <AccountTitle>이름</AccountTitle>
        <CustomInput ref={usernameRef} type="" placeholder="" />
      </div>
      <div>
        <AccountTitle>학번</AccountTitle>
        <CustomInput ref={admissionRef} type="" placeholder="" />
      </div>
      <div>
        <AccountTitle>학부</AccountTitle>
        <CustomInput ref={departmentRef} type="" placeholder="" />
      </div>
      <div>
        <AccountTitle>성별</AccountTitle>
        <SelectSex>
          <button style={{ background: sex === "M" ? "#6396FF" : "" }} onClick={clickSex("M")}>
            남자
          </button>
          <button style={{ background: sex === "W" ? "#C16175" : "" }} onClick={clickSex("W")}>
            여자
          </button>
        </SelectSex>
      </div>
      <SignUpBtn onClick={Submit}>회원가입</SignUpBtn>
    </SignUpContainer>
  );
};

export default SignUpBlock;
