import { ContentWrapper } from "Layouts/Content/styles";
import Cookies from "js-cookie";
import { NextPage } from "next";
import React from "react";
import useGotoPage from "../../Hooks/useGotoPage";
import { SignUpWrapper } from "./styles";
import SignUpTemplates from "components/Templates/SignUp";

const SignUp: NextPage = () => {
  const gotoPage = useGotoPage();
  if (Cookies.get("userIdx")) gotoPage("/");

  return (
    <ContentWrapper>
      <SignUpWrapper>
        <SignUpTemplates />
      </SignUpWrapper>
    </ContentWrapper>
  );
};

export default SignUp;
