import React, { useRef } from "react";
import { CustomInput, EtcWrapper, LoginBtn, LoginWrapper } from "./styles";

const LoginBlock = () => {
  const IdRef = useRef<HTMLInputElement>(null);
  const PassWordRef = useRef<HTMLInputElement>(null);

  return (
    <LoginWrapper>
      <div>
        <CustomInput ref={IdRef} placeholder="ID(이메일 주소)" />
      </div>
      <div>
        <CustomInput ref={PassWordRef} placeholder="비밀번호" type="password" />
      </div>
      <div>
        <LoginBtn>로그인</LoginBtn>
      </div>
      <EtcWrapper>
        <div>회원가입</div>
        <div>ID/PWD 찾기</div>
      </EtcWrapper>
    </LoginWrapper>
  );
};

export default LoginBlock;
