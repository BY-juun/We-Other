import { useRouter } from "next/router";
import React, { useCallback, VFC } from "react";
import { TopLayOutItems, TopLayOutRight, TopLayOutWrapper } from "./styles";

const TopLayOut: VFC = () => {
  const router = useRouter();

  const gotoHome = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <TopLayOutWrapper>
      <TopLayOutItems onClick={gotoHome}>Home</TopLayOutItems>
      <TopLayOutRight>
        <TopLayOutItems>Menu1</TopLayOutItems>
        <TopLayOutItems>Menu2</TopLayOutItems>
      </TopLayOutRight>
    </TopLayOutWrapper>
  );
};

export default TopLayOut;
