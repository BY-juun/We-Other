import React from "react";
import { TopLayOutItems, TopLayOutRight, TopLayOutWrapper } from "./styles";

const TopLayOut = () => {
  return (
    <TopLayOutWrapper>
      <TopLayOutItems>Home</TopLayOutItems>
      <TopLayOutRight>
        <TopLayOutItems>Menu1</TopLayOutItems>
        <TopLayOutItems>Menu2</TopLayOutItems>
      </TopLayOutRight>
    </TopLayOutWrapper>
  );
};

export default TopLayOut;
