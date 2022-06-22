import { useGetUserInfo } from "Hooks/User";
import { HomeLeft, LinkCardWrapper } from "./styles";

import React from "react";
import MainContent from "components/Organisms/MainContent";

import LoginBlock from "components/Organisms/Home/LoginBlock";
import HomeTitle from "components/Atoms/Home/HomeTitle";
import HomeDescription from "components/Atoms/Home/HomeDescription";
import LinkCards from "components/Organisms/Home/LinkCards";

const HomeTemplate = () => {
  const { data, isLoading } = useGetUserInfo();

  return (
    <>
      <HomeLeft>
        <HomeTitle />
        <HomeDescription />
        {!isLoading && <>{data?.userName ? <MainContent userName={data?.userName} /> : <LoginBlock />}</>}
      </HomeLeft>
      <LinkCardWrapper>
        <LinkCards />
      </LinkCardWrapper>
    </>
  );
};

export default HomeTemplate;
