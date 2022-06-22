import FindIdPwdBtn from "components/Atoms/Account/FindIdPwdBtn";
import React, { VFC } from "react";
import useGotoPage from "Hooks/useGotoPage";
import { EtcWrapper } from "./styles";
import LoginForm from "components/Molecules/Home/LoginForm";

const LoginBlock: VFC = () => {
  const gotoPage = useGotoPage();
  return (
    <>
      <LoginForm />
      <EtcWrapper>
        <button onClick={gotoPage("/SignUp")}>회원가입</button>
        <FindIdPwdBtn />
      </EtcWrapper>
    </>
  );
};

export default LoginBlock;
