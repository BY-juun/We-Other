import React, { useCallback } from "react";
import Image from "next/image";
import { FriendRefreshBtnWrapper } from "./styles";
import { useQueryClient } from "react-query";
import { QueryKey } from "Utils/QueryKey";

const FriendRefreshBtn = () => {
  const queryClient = useQueryClient();
  const refreshFriendQuery = useCallback(() => {
    queryClient.invalidateQueries(QueryKey.Friend);
  }, []);

  return (
    <FriendRefreshBtnWrapper onClick={refreshFriendQuery}>
      <Image src="/refresh.png" alt="새로고침" width={25} height={25} />
    </FriendRefreshBtnWrapper>
  );
};

export default FriendRefreshBtn;
