import AccountInput from "components/Atoms/AccountInput";
import React, { useRef } from "react";
import { AccountTitle, SignUpBtn, SignUpContainer } from "./styles";

const SignUpBlock = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  return (
    <SignUpContainer>
      <div>
        <AccountTitle>ID(이메일주소)</AccountTitle>
        <AccountInput ref={idRef} type="email" placeholder="" />
      </div>
      <div>
        <AccountTitle>비밀번호</AccountTitle>
        <AccountInput ref={passwordRef} type="password" placeholder="" />
      </div>
      <div>
        <AccountTitle>비밀번호 확인</AccountTitle>
        <AccountInput ref={passwordCheckRef} type="password" placeholder="" />
      </div>
      <div>
        <AccountTitle>닉네임</AccountTitle>
        <AccountInput ref={nicknameRef} type="" placeholder="" />
      </div>
      <SignUpBtn>회원가입</SignUpBtn>
    </SignUpContainer>
  );
};

export default SignUpBlock;
