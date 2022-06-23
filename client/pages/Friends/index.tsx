import React from "react";
import { FriendsWrapper } from "./styles";
import useCheckLogin from "../../Hooks/useCheckLogin";
import FriendsTemplate from "components/Templates/Friends";
import FriendRefreshBtn from "components/Atoms/Friends/FriendRefreshBtn";

const Friend = () => {
  useCheckLogin();
  return (
    <FriendsWrapper>
      <FriendsTemplate />
      <FriendRefreshBtn />
    </FriendsWrapper>
  );
};

export default Friend;
