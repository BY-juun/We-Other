import React from "react";
import ResetPwdBtn from "components/Atoms/Account/ResetPwdBtn";
import { MyInfoItem, MyInfoRoot, MyInfoTitle } from "../styles";
import { UserInfo } from "Types/User";

const MyInfo = ({ UserInfo }: { UserInfo: UserInfo }) => {
  return (
    <>
      <MyInfoRoot>
        <MyInfoItem>
          <MyInfoTitle>이메일</MyInfoTitle>
          <div>{UserInfo?.email}</div>
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>비밀번호</MyInfoTitle>
          <ResetPwdBtn email={String(UserInfo?.email)} />
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>이름</MyInfoTitle>
          <div>{UserInfo?.userName}</div>
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>학과</MyInfoTitle>
          <div>{UserInfo?.department}</div>
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>학번</MyInfoTitle>
          <div>{UserInfo?.admission}</div>
        </MyInfoItem>
      </MyInfoRoot>
    </>
  );
};

export default MyInfo;
