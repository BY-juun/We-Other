import MyDetailInfo from "components/Organisms/MyPage/MyDetailInfo";
import MyInfo from "components/Organisms/MyPage/MyInfo";
import { useGetUserInfo } from "Hooks/User";
import React from "react";
import PageLoading from "Utils/PageLoading";
import { UserInfo } from "Types/User";
import { MypageItem } from "./styles";

const MyPageTemplate = () => {
  const { data: UserInfo, isLoading } = useGetUserInfo();

  if (isLoading) return <>{PageLoading(isLoading)}</>;

  return (
    <>
      <MypageItem>
        <h2>기본정보</h2>
        <MyInfo UserInfo={UserInfo as UserInfo} />
      </MypageItem>
      <MypageItem>
        <h2>추가정보</h2>
        <MyDetailInfo UserInfo={UserInfo as UserInfo} />
      </MypageItem>
    </>
  );
};

export default MyPageTemplate;
