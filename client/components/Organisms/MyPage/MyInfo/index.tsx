import React from "react";
import ResetPwdBtn from "components/Atoms/Account/ResetPwdBtn";
import { UserDetailInfo } from "Types/User";
import { MyInfoBtnWrapper, MyInfoLeftBlock, MyInfoRightBlock, MyInfoRoot } from "./styles";
import MBTIRegistBtn from "components/Atoms/MyPage/MBTIRegistBtn";
import ShortDescriptionRegistBtn from "components/Atoms/MyPage/ShortDescriptionRegistBtn";
import InteresetRegistBtn from "components/Atoms/MyPage/InterestRegistBtn";

const MyInfo = ({ UserInfo }: { UserInfo: UserDetailInfo }) => {
  return (
    <>
      <MyInfoRoot>
        <MyInfoLeftBlock>
          {Infos.map((info) => (
            <p key={info.text}>{info.text}</p>
          ))}
        </MyInfoLeftBlock>
        <MyInfoRightBlock>
          {Infos.map((info) => {
            if (UserInfo[info.key]) {
              return <p key={info.key}>{UserInfo[info.key]}</p>;
            } else {
              if (info.key === "ResetPwdBtn")
                return (
                  <MyInfoBtnWrapper>
                    <ResetPwdBtn email={UserInfo.email} />
                  </MyInfoBtnWrapper>
                );
              if (info.key === "mbti")
                return (
                  <MyInfoBtnWrapper>
                    <MBTIRegistBtn />
                  </MyInfoBtnWrapper>
                );
              if (info.key === "introduce")
                return (
                  <MyInfoBtnWrapper>
                    <ShortDescriptionRegistBtn />
                  </MyInfoBtnWrapper>
                );
              if (info.key === "favorite")
                return (
                  <MyInfoBtnWrapper>
                    <InteresetRegistBtn />
                  </MyInfoBtnWrapper>
                );
            }
          })}
        </MyInfoRightBlock>
      </MyInfoRoot>
    </>
  );
};

const Infos = [
  { text: "이름", key: "userName" },
  { text: "이메일", key: "email" },
  { text: "비밀번호 초기화", key: "ResetPwdBtn" },
  { text: "학과", key: "department" },
  { text: "학번", key: "admission" },
  { text: "성별", key: "sex" },
  { text: "MBTI", key: "mbti" },
  { text: "자기소개", key: "introduce" },
  { text: "관심사", key: "favorite" },
];

export default MyInfo;
