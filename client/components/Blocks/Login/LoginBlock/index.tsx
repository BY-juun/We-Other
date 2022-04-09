import AccountInput from "components/Atoms/AccountInput";
import { useRouter } from "next/router";
import React, { useCallback, useRef, VFC } from "react";
import { EtcWrapper, LoginBtn, LoginWrapper } from "./styles";

const LoginBlock: VFC = () => {
  const router = useRouter();

  const gotoSignUp = useCallback(() => {
    router.push("/SignUp");
  }, []);

  const IdRef = useRef<HTMLInputElement>(null);
  const PassWordRef = useRef<HTMLInputElement>(null);
  return (
    <LoginWrapper>
      <div>
        <AccountInput ref={IdRef} placeholder="ID(이메일 주소)" type="email" />
      </div>
      <div>
        <AccountInput ref={PassWordRef} placeholder="비밀번호" type="password" />
      </div>
      <div>
        <LoginBtn>로그인</LoginBtn>
      </div>
      <EtcWrapper>
        <div onClick={gotoSignUp}>회원가입</div>
        <div>ID/PWD 찾기</div>
      </EtcWrapper>
    </LoginWrapper>
  );
};

export default LoginBlock;
