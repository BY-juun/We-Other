import AddFriendBtn from "components/Atoms/Friends/AddFriendBtn";
import FriendRequest from "components/Organisms/Friend/FriendRequest";
import MyFriend from "components/Organisms/Friend/MyFriends";
import React from "react";
import { FriendsItem, TitleArea } from "./styles";

const FriendsTemplate = () => {
  return (
    <>
      <FriendsItem>
        <TitleArea>
          <h2>친구목록</h2>
          <AddFriendBtn />
        </TitleArea>
        <MyFriend />
      </FriendsItem>
      <FriendsItem>
        <FriendRequest />
      </FriendsItem>
    </>
  );
};

export default FriendsTemplate;
