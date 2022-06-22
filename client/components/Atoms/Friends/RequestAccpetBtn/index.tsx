import React, { useCallback } from "react";
import { useReplyFriendRequest } from "Hooks/Friends";

const RequestAcceptBtn = ({ reqIdx, name }: { reqIdx: number; name: string }) => {
  const { mutate } = useReplyFriendRequest();
  const accept = useCallback(() => {
    if (!window.confirm("* 요청을 수락하시겠어요?")) return;
    mutate({ name: name, reqIdx: reqIdx, answer: "수락" });
  }, []);
  return (
    <button onClick={accept}>
      <img src="/accept.png" alt="수락" />
    </button>
  );
};

export default RequestAcceptBtn;
