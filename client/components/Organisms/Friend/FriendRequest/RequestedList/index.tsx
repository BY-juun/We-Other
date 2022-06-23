import React from "react";
import FriendCard from "components/Molecules/Friends/FriendCard";
import RequestAcceptBtn from "components/Atoms/Friends/RequestAccpetBtn";
import { BtnSet, ListWrapper, RequestCard } from "../styles";
import RequestDeleteBtn from "components/Atoms/Friends/RequestDeleteBtn";
import { useGetRequestFriendList } from "Hooks/Friends";
import NoItem from "components/Molecules/NoMyPosts";
const RequestedList = () => {
  const { data, isLoading } = useGetRequestFriendList();
  const requestList = data?.friendRequestedList;
  return (
    <>
      <h2>받은 친구 요청</h2>
      {!isLoading && (
        <ListWrapper>
          {requestList?.length !== 0 ? (
            requestList?.map((friend) => (
              <RequestCard>
                <BtnSet>
                  <RequestAcceptBtn name={friend?.name as string} reqIdx={Number(friend?.friendReqIdx)} />
                  <RequestDeleteBtn name={friend?.name as string} reqIdx={Number(friend?.friendReqIdx)} />
                </BtnSet>
                <FriendCard name={friend?.name as string} email={friend?.email as string} />
              </RequestCard>
            ))
          ) : (
            <NoItem ment="받은 친구 요청이 없어요 :(" />
          )}
        </ListWrapper>
      )}
    </>
  );
};

export default RequestedList;
