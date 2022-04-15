import type { GetServerSidePropsContext, NextPage } from "next";
import TopLayOut from "components/Layouts/TopLayOut";
import { ContentWrapper } from "components/Layouts/Content/styles";
import { HomeDescription, HomeWrapper } from "./styles";
import LoginBlock from "../components/Blocks/Login/LoginBlock";
import { dehydrate, QueryClient } from "react-query";
import { UserInfoAPI } from "API/User";
import { useGetUserInfo } from "_Query/User";

const Home: NextPage = () => {
  //const {data} = useGetUserInfo();
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const userIdx = context.req ? context.req.headers.cookie : "";
  if (userIdx) {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["userInfo"], () => UserInfoAPI(Number(userIdx)), {
      staleTime: Infinity,
    });
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  }
};

export default Home;
