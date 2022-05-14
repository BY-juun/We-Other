import type { NextPage } from "next";
import { ContentWrapper } from "components/Layouts/Content/styles";
import { HomeDescription, HomeLeft, HomeWrapper, LinkCardWrapper, Title } from "./styles";
import LoginBlock from "../components/Blocks/Login/LoginBlock";
import { useGetUserInfo } from "_Query/User";
import MainContent from "components/Blocks/MainContent";
import LinkCard from "../components/Atoms/LinkCard";

const Home: NextPage = () => {
  const { data, isLoading } = useGetUserInfo();

  return (
    <>
      <ContentWrapper>
        <HomeWrapper>
          <HomeLeft>
            <Title>WeOther</Title>
            <HomeDescription>아주대학교 흥신소 프로젝트</HomeDescription>
            {!isLoading && <>{data?.userName ? <MainContent userName={data?.userName} /> : <LoginBlock />}</>}
          </HomeLeft>
          <LinkCardWrapper>
            {contents.map((content) => {
              return <LinkCard content={content} />;
            })}
          </LinkCardWrapper>
        </HomeWrapper>
      </ContentWrapper>
    </>
  );
};

const contents = ["오늘의 인기게시글", "새로운 게시글", "뭐암튼 대충", "뭐들어가겠죠"];

export default Home;
