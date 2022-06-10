import MyFriend from "components/Blocks/MyPage/MyFriend";
import React from "react";
import MyInfo from "../../components/Blocks/MyPage/MyInfo";
import useCheckLogin from "../../Hooks/useCheckLogin";
import { MypageItem, MyPageWrapper } from "./styles";

const MyPage = () => {
  //useCheckLogin();

  return (
    <MyPageWrapper>
      <MypageItem>
        <MyInfo />
      </MypageItem>
      <MypageItem>
        <MyFriend />
      </MypageItem>
    </MyPageWrapper>
  );
};

export default MyPage;
