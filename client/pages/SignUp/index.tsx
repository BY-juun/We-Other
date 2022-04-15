import SignUpBlock from "components/Blocks/SingUp/SignUpBlock";
import { ContentWrapper } from "components/Layouts/Content/styles";
import TopLayOut from "components/Layouts/TopLayOut";
import { GetServerSidePropsContext } from "next";
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const userIdx = context.req ? context.req.headers.cookie : "";
  if (userIdx) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
};

export default SignUp;
