import React from "react";
import { UserDetailInfo } from "Types/User";
import { DetailFriendInfoLeftBlock, DetailFriendInfoRightBlock, DetailFriendInfoWrapper } from "./styles";

const DetailFriendInfo = ({ friendInfo }: { friendInfo: UserDetailInfo }) => {
  console.log(friendInfo);
  return (
    <DetailFriendInfoWrapper>
      <DetailFriendInfoLeftBlock>
        {Infos.map((info) => (
          <span key={info.text}>{info.text}</span>
        ))}
      </DetailFriendInfoLeftBlock>
      <DetailFriendInfoRightBlock>
        {Infos.map((info) => (
          <span key={info.key}>{friendInfo[info.key] || <p>미등록</p>}</span>
        ))}
      </DetailFriendInfoRightBlock>
    </DetailFriendInfoWrapper>
  );
};

const Infos = [
  { text: "이름", key: "userName" },
  { text: "이메일", key: "email" },
  { text: "학과", key: "department" },
  { text: "학번", key: "admission" },
  { text: "성별", key: "sex" },
  { text: "MBTI", key: "mbti" },
  { text: "자기소개", key: "introduce" },
  { text: "관심사", key: "favorite" },
];

export default DetailFriendInfo;
