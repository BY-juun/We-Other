import type { NextPage } from "next";
import { ContentWrapper } from "components/Layouts/Content/styles";
import { HomeDescription, HomeWrapper } from "./styles";
import LoginBlock from "../components/Blocks/Login/LoginBlock";
import { useGetUserInfo } from "_Query/User";

const Home: NextPage = () => {
  const { data, isLoading } = useGetUserInfo();

  return (
    <>
      <ContentWrapper>
        <HomeWrapper>
          <h1>WeOther</h1>
          <HomeDescription>아주대학교 흥신소 프로젝트</HomeDescription>
          {!isLoading && <>{data?.userName ? <div>안녕하세요 {data?.userName}님</div> : <LoginBlock />}</>}
        </HomeWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
