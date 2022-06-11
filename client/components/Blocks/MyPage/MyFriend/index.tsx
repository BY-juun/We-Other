import FriendList from "components/Atoms/FriendList";
import React from "react";
import { DummyFriend } from "Types/Dummy";
import { FriendListRoot } from "./styles";

const MyFriend = () => {
  const friends = DummyFriend;
  return (
    <FriendListRoot>
      {friends.length > 0 ? (
        <>
          {friends.map((friend) => (
            <FriendList friend={friend} />
          ))}
        </>
      ) : (
        <span>아직 등록된 친구가 없어요.</span>
      )}
    </FriendListRoot>
  );
};

export default MyFriend;
