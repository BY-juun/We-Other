import FriendCard from "components/Molecules/Friends/FriendCard";
import NoFriend from "components/Molecules/Friends/NoFriend";
import React from "react";
import { useGetFriendList } from "Hooks/Friends";
import { FriendCardWrapper, FriendListRoot } from "./styles";

const MyFriend = () => {
  const { data: friends, isLoading } = useGetFriendList();

  return (
    <FriendListRoot>
      {!isLoading && (
        <>
          {friends && friends.length > 0 ? (
            <>
              {friends?.map((friend) => (
                <FriendCardWrapper key={friend?.userIdx}>
                  <FriendCard key={friend?.userIdx} name={String(friend?.name)} email={String(friend?.email)} userIdx={friend?.userIdx} />
                </FriendCardWrapper>
              ))}
            </>
          ) : (
            <NoFriend />
          )}
        </>
      )}
    </FriendListRoot>
  );
};

export default MyFriend;
