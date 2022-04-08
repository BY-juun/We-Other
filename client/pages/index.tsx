import type { NextPage } from "next";
import TopLayOut from "components/Layouts/TopLayOut";
import { ContentWrapper } from "components/Layouts/Content/styles";
import AjouLogo from "public/ajou.png";
import Image from "next/image";
import { HomeDescription, HomeWrapper, LogoWrapper } from "./styles";
import LoginBlock from "../components/Blocks/LoginBlock";

const Home: NextPage = () => {
  return (
    <>
      <TopLayOut />
      <ContentWrapper>
        <HomeWrapper>
          <h1>WeOther</h1>
          <HomeDescription>아주대학교 흥신소 프로젝트</HomeDescription>
          <LoginBlock />
        </HomeWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
