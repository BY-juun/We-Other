import { useAppDispatch } from "Hooks/useAppDispatch";
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "store/rootReducer";
import { HandlePickedFriend, MeetingStateType } from "store/slices/Meeting";
import { FriendType } from "Types/User";
import { FriendInfo, FriendListWrapper } from "./styles";

const FriendList = ({ friend, mode }: { friend: FriendType; mode?: string }) => {
  const dispatch = useAppDispatch();

  const handleCheckBox = useCallback(() => {
    dispatch(HandlePickedFriend(friend.userIdx));
  }, []);

  return (
    <FriendListWrapper>
      {mode === "미팅등록" && <input type="checkbox" onChange={handleCheckBox} />}
      <div>
        <img src="/defaultUser.png" alt="User" />
      </div>
      <FriendInfo>
        <span>
          <strong>이름 </strong>
          {friend.name}
        </span>
        <span>
          <strong>나이 </strong>
          {friend.age}
        </span>
        <span>
          <strong>이메일 </strong>
          {friend.email}
        </span>
      </FriendInfo>
    </FriendListWrapper>
  );
};

export default FriendList;
