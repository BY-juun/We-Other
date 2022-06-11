import AdditionalInfoBtn from "components/Atoms/AdditionalInfoBtn";
import React from "react";
import { UserInfo } from "Types/User";
import { MyInfoItem, MyInfoRoot, MyInfoTitle } from "../styles";

const MyDetailInfo = ({ UserInfo }: { UserInfo: UserInfo }) => {
  return (
    <>
      <MyInfoRoot>
        <MyInfoItem>
          <MyInfoTitle>추가정보 여부</MyInfoTitle>
          <div style={{ color: "red" }}>미등록</div>
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>추가정보 등록</MyInfoTitle>
          <AdditionalInfoBtn />
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>MBTI</MyInfoTitle>
          <div>{UserInfo?.MBTI}</div>
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>간단한 자기소개</MyInfoTitle>
          <div>{UserInfo?.shortDescription}</div>
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>관심사</MyInfoTitle>
          {UserInfo.intereset.map((v) => {
            return <span key={v}>{v}</span>;
          })}
        </MyInfoItem>
      </MyInfoRoot>
    </>
  );
};

export default MyDetailInfo;
