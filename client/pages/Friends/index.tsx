import React from "react";
import { FriendsWrapper } from "./styles";
import useCheckLogin from "../../Hooks/useCheckLogin";
import FriendsTemplate from "components/Templates/Friends";

const Friend = () => {
  useCheckLogin();
  return (
    <FriendsWrapper>
      <FriendsTemplate />
    </FriendsWrapper>
  );
};

export default Friend;
