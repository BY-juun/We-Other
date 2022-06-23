import React from "react";
import FriendCard from "components/Molecules/Friends/FriendCard";
import RequestDenyBtn from "components/Atoms/Friends/RequestDenyBtn";
import { ListWrapper, RequestCard } from "../styles";
import { useGetRequestFriendList } from "Hooks/Friends";
import NoItem from "components/Molecules/NoMyPosts";

const RequestList = () => {
  const { data, isLoading } = useGetRequestFriendList();
  const requestList = data?.friendRequestingList;
  return (
    <>
      <h2>보낸 친구 요청</h2>
      {!isLoading && (
        <ListWrapper>
          {requestList?.length !== 0 ? (
            requestList?.map((friend) => (
              <RequestCard key={friend?.userIdx}>
                <RequestDenyBtn reqIdx={Number(friend?.friendReqIdx)} />
                <FriendCard name={friend?.name as string} email={friend?.email as string} />
              </RequestCard>
            ))
          ) : (
            <NoItem ment="보낸 친구 요청이 없어요 :(" />
          )}
        </ListWrapper>
      )}
    </>
  );
};

export default RequestList;
