import React from "react";
import { UserInfo } from "Types/User";
import InteresetRegistBtn from "../../../Atoms/MyPage/InterestRegistBtn";
import MBTIRegistBtn from "../../../Atoms/MyPage/MBTIRegistBtn";
import ShortDescriptionRegistBtn from "../../../Atoms/MyPage/ShortDescriptionRegistBtn";
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
          <MyInfoTitle>MBTI</MyInfoTitle>
          <div>{UserInfo?.MBTI || <MBTIRegistBtn />}</div>
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>간단한 자기소개</MyInfoTitle>
          <div>{UserInfo?.shortDescription || <ShortDescriptionRegistBtn />}</div>
        </MyInfoItem>
        <MyInfoItem>
          <MyInfoTitle>관심사</MyInfoTitle>
          {UserInfo.intereset ? (
            <>
              {UserInfo?.intereset.map((v) => {
                return <span key={v}>{v}</span>;
              })}
            </>
          ) : (
            <InteresetRegistBtn />
          )}
        </MyInfoItem>
      </MyInfoRoot>
    </>
  );
};

export default MyDetailInfo;
