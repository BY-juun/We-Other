import type { NextPage } from "next";
import { ContentWrapper } from "Layouts/Content/styles";
import { HomeWrapper } from "./styles";
import HomeTemplate from "components/Templates/Home";

const Home: NextPage = () => {
  return (
    <ContentWrapper>
      <HomeWrapper>
        <HomeTemplate />
      </HomeWrapper>
    </ContentWrapper>
  );
};

export default Home;
