import LinkCard from "components/Atoms/LinkCard";
import React from "react";
import { LogOutBtn, MainContentWrapper } from "./styles";

const MainContent = ({ userName }: { userName: string | undefined }) => {
  return (
    <MainContentWrapper>
      <div>안녕하세요 {userName}님</div>
      <LogOutBtn>로그아웃</LogOutBtn>
      {contents.map((content) => {
        return <LinkCard content={content} />;
      })}
    </MainContentWrapper>
  );
};

const contents = ["오늘의 인기게시글", "새로운 게시글", "뭐암튼 대충", "뭐들어가겠죠"];

export default MainContent;
