import React from "react";
import { NoFriendWrapper } from "./styles";

const NoFriend = () => {
  return (
    <NoFriendWrapper>
      <div>
        <span>
          친구가 없어요 :( <br /> 친구를 등록해보세요!
        </span>
        <button>친구 등록하러 가기</button>
      </div>
    </NoFriendWrapper>
  );
};

export default NoFriend;
