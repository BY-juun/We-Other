import type { NextPage } from "next";
import { ContentWrapper } from "components/Layouts/Content/styles";
import { HomeDescription, HomeWrapper } from "./styles";
import LoginBlock from "../components/Blocks/Login/LoginBlock";
import { useGetUserInfo } from "_Query/User";
import MainContent from "components/Blocks/MainContent";

const Home: NextPage = () => {
  const { data, isLoading } = useGetUserInfo();

  return (
    <>
      <ContentWrapper>
        <HomeWrapper>
          <span>WeOther</span>
          <HomeDescription>아주대학교 흥신소 프로젝트</HomeDescription>
          {!isLoading && <>{data?.userName ? <MainContent userName={data?.userName} /> : <LoginBlock />}</>}
        </HomeWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
