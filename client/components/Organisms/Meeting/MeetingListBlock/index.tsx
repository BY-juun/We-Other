import React from "react";
import useFilterMeeting from "./Hooks/useFilterMeeting";
import MeetingCard from "components/Molecules/Meeting/MeetingCard";
import useInitializeMeetingFilter from "./Hooks/useInitializeMeetingFilter";
import { MeetingListBlockWrapper } from "./styles";

const MeetingListBlock = () => {
  const MeetingList = useFilterMeeting();
  useInitializeMeetingFilter();
  return (
    <MeetingListBlockWrapper>
      {MeetingList && MeetingList.length > 0 ? (
        <>{MeetingList && MeetingList.map((meeting) => <MeetingCard key={meeting.roomIdx} meeting={meeting} />)}</>
      ) : (
        <>{"조건에 맞는 미팅이 없어요 :("}</>
      )}
    </MeetingListBlockWrapper>
  );
};

export default MeetingListBlock;
