import WritePostBtn from "components/Atoms/Post/WritePostBtn";
import FilterBlock from "components/Organisms/Meeting/FilterBlock";
import MeetingListBlock from "components/Organisms/Meeting/MeetingListBlock";
import React from "react";

const MeetingTemplate = () => {
  return (
    <>
      <FilterBlock />
      <MeetingListBlock />
      <WritePostBtn mode="Meeting" />
    </>
  );
};

export default MeetingTemplate;
