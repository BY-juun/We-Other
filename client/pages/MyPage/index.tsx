import React from "react";
import MyInfo from "../../components/Blocks/MyPage/MyInfo";
import useCheckLogin from "../../Hooks/useCheckLogin";
import { MypageItem, MyPageWrapper } from "./styles";

const MyPage = () => {
  //useCheckLogin();

  return (
    <MyPageWrapper>
      <MypageItem>
        <h2>기본정보</h2>
        <MyInfo />
      </MypageItem>
      <MypageItem>
        <h2>추가정보</h2>
        <div></div>
      </MypageItem>
    </MyPageWrapper>
  );
};

export default MyPage;
