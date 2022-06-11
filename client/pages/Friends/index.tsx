import MyFriend from "components/Blocks/MyPage/MyFriend";
import React from "react";
import { FriendsItem, FriendsWrapper } from "./styles";

const Friend = () => {
  return (
    <FriendsWrapper>
      <FriendsItem>
        <h2>친구목록</h2>
        <MyFriend />
      </FriendsItem>
      <FriendsItem>
        <h2>추천친구</h2>
        <MyFriend />
      </FriendsItem>
    </FriendsWrapper>
  );
};

export default Friend;
