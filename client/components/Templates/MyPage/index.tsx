import MyInfo from "components/Organisms/MyPage/MyInfo";
import { useGetUserDetailInfo } from "Hooks/User";
import React from "react";
import PageLoading from "Utils/PageLoading";
import { UserDetailInfo, UserInfo } from "Types/User";
import { MypageItem, MyPageTemplateWrapper } from "./styles";
import Cookies from "js-cookie";
import MyPosts from "components/Organisms/MyPage/MyPosts";

const MyPageTemplate = () => {
  const { data: UserInfo, isLoading } = useGetUserDetailInfo(Number(Cookies.get("userIdx")));

  if (isLoading) return <>{PageLoading(isLoading)}</>;

  return (
    <MyPageTemplateWrapper>
      <MypageItem>
        <h2>내 정보</h2>
        <MyInfo UserInfo={UserInfo as UserDetailInfo} />
      </MypageItem>
      <MypageItem>
        <MyPosts />
      </MypageItem>
    </MyPageTemplateWrapper>
  );
};

export default MyPageTemplate;
