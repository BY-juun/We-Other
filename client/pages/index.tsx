import type { NextPage } from "next";
import TopLayOut from "components/Layouts/TopLayOut";
import { ContentWrapper } from "components/Layouts/Content/styles";
import { HomeDescription, HomeWrapper } from "./styles";
import LoginBlock from "../components/Blocks/Login/LoginBlock";

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
