import MyPageTemplate from "components/Templates/MyPage";
import React from "react";
import useCheckLogin from "../../Hooks/useCheckLogin";
import { MyPageWrapper } from "./styles";

const MyPage = () => {
  useCheckLogin();

  return (
    <MyPageWrapper>
      <MyPageTemplate />
    </MyPageWrapper>
  );
};

export default MyPage;
