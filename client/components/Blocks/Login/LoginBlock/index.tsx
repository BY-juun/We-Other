import { CustomInput } from "components/Atoms/CustomInput/styles";
import { useRouter } from "next/router";
import React, { useCallback, useRef, VFC } from "react";
import { useLogin } from "_Query/User";
import { EtcWrapper, LoginBtn, LoginWrapper } from "./styles";

const LoginBlock: VFC = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const gotoSignUp = useCallback(() => {
    router.push("/SignUp");
  }, [router]);

  const LoginSuccess = useCallback(() => {
    return alert("로그인 성공!");
  }, []);

  const loginMutation = useLogin(LoginSuccess);

  const Submit = useCallback(() => {
    if (!emailRef?.current?.value) {
      return alert("*이메일을 입력해주세요");
    }
    if (!passwordRef?.current?.value) {
      return alert("*비밀번호를 입력해주세요");
    }
    const reqData = {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    };
    loginMutation.mutate(reqData);
  }, [loginMutation]);

  return (
    <LoginWrapper>
      <div>
        <CustomInput ref={emailRef} placeholder="ID(이메일 주소)" type="email" />
      </div>
      <div>
        <CustomInput ref={passwordRef} placeholder="비밀번호" type="password" />
      </div>
      <div>
        <LoginBtn onClick={Submit}>로그인</LoginBtn>
      </div>
      <EtcWrapper>
        <div onClick={gotoSignUp}>회원가입</div>
        <div>ID/PWD 찾기</div>
      </EtcWrapper>
    </LoginWrapper>
  );
};

export default LoginBlock;