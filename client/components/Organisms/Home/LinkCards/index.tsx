import React from "react";
import LinkCard from "components/Molecules/Home/LinkCard";

const LinkCards = () => {
  return (
    <>
      {contents.map((content) => {
        return <LinkCard key={content.title} content={content} />;
      })}
    </>
  );
};

export default LinkCards;

const contents = [
  { title: "흥신소", description: "사람을 찾아요!", url: "/Posts" },
  { title: "미팅", description: "우리랑 미팅하실분?", url: "/Meeting" },
  { title: "게임", description: "미팅에서 이 게임 해보는건 어떠세요?", url: "/" },
  { title: "추후 추가 컨텐츠", description: "* 추후 추가 예정입니다", url: "/" },
];
