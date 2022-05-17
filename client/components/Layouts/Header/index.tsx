import React from "react";
import { HeaderItems, HeaderTitle, HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <HeaderTitle>WeOther</HeaderTitle>
      </div>
      <HeaderItems>
        <div>
          <span>게시판</span>
        </div>
        <div>
          <span>오늘의뭐시기</span>
        </div>
        <div>
          <span>마이페이지</span>
        </div>
      </HeaderItems>
    </HeaderWrapper>
  );
};

export default Header;
