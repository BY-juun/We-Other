import SignUpBlock from "components/Blocks/SingUp/SignUpBlock";
import { ContentWrapper } from "components/Layouts/Content/styles";
import Cookies from "js-cookie";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SignUpTitle, SignUpWrapper } from "./styles";

const SignUp: NextPage = () => {
  const router = useRouter();
  if (Cookies.get("userIdx")) router.push("/");

  return (
    <>
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
