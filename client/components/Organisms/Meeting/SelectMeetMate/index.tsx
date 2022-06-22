import React, { useCallback } from "react";
import { useGetFriendList } from "Hooks/Friends";
import FriendCard from "../../../Molecules/Friends/FriendCard";
import { useRecoilState } from "recoil";
import { MeetMate } from "../../../../store/meeting";
import { AddFriendItem } from "./styles";

const SelectMeetMate = ({ userSex }: { userSex: string }) => {
  const { data: friends, isLoading } = useGetFriendList();

  const [meetMateList, setMeetMateList] = useRecoilState(MeetMate);

  const onChangeMateList = useCallback(
    (userIdx: number) => () => {
      if (meetMateList.includes(userIdx)) setMeetMateList(meetMateList.filter((v) => v !== userIdx));
      else {
        if (meetMateList.length === 3) return alert("* 본인 포함 최대 4인까지만 선택가능해요");
        setMeetMateList((prev) => [...prev, userIdx]);
      }
    },
    [meetMateList]
  );

  return (
    <>
      {!isLoading && (
        <>
          {friends &&
            friends
              .filter((f) => f?.sex === userSex)
              .map((friend) => {
                return (
                  <AddFriendItem key={friend?.userIdx}>
                    <input type="checkbox" onChange={onChangeMateList(Number(friend?.userIdx))} checked={meetMateList.includes(Number(friend?.userIdx))} />
                    <FriendCard name={String(friend?.name)} email={String(friend?.email)} userIdx={friend?.userIdx} />
                  </AddFriendItem>
                );
              })}
        </>
      )}
    </>
  );
};

export default SelectMeetMate;
