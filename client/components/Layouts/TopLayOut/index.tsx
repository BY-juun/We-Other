import { useRouter } from "next/router";
import React, { useCallback, VFC } from "react";
import { TopLayOutItems, TopLayOutRight, TopLayOutWrapper } from "./styles";

const TopLayOut: VFC = () => {
  const router = useRouter();

  const gotoHome = useCallback(() => {
    router.push("/");
  }, [router]);

  const gotoPosts = useCallback(() => {
    router.push("/Posts");
  }, [router]);

  return (
    <TopLayOutWrapper>
      <TopLayOutItems onClick={gotoHome}>Home</TopLayOutItems>
      <TopLayOutRight>
        <TopLayOutItems onClick={gotoPosts}>게시판</TopLayOutItems>
        <TopLayOutItems>마이페이지</TopLayOutItems>
      </TopLayOutRight>
    </TopLayOutWrapper>
  );
};

export default TopLayOut;
