import SignUpBlock from "components/Blocks/SignUpBlock/SingUp";
import { ContentWrapper } from "components/Layouts/Content/styles";
import TopLayOut from "components/Layouts/TopLayOut";
import React from "react";
import { SignUpTitle, SignUpWrapper } from "./styles";

const SignUp = () => {
  return (
    <>
      <TopLayOut />
      <ContentWrapper>
        <SignUpWrapper>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpBlock />
        </SignUpWrapper>
      </ContentWrapper>
    </>
  );
};

export default SignUp;
