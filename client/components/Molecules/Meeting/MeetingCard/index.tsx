import React from "react";
import { MeetingType } from "../../../../Types/Meeting";
import { ContentBox, ImgBox, MeetingCardWrapper } from "./styles";

const MeetingCard = ({ meeting }: { meeting: MeetingType }) => {
  return (
    <MeetingCardWrapper>
      <ImgBox>
        {Array.from({ length: meeting.capacity }).map((v, idx) => {
          return <div style={getImgBoxItemStyle(meeting.capacity)} key={idx + 100} />;
        })}
      </ImgBox>
      <ContentBox>
        <div>
          <h4>{meeting.title}</h4>
        </div>
        <div>
          <h5>{meeting.roomIntro}</h5>
        </div>
        <div>
          <span>성별 : {meeting.sexInfo === "M" ? "남자" : "여자"}</span>
          <span>인원 : {meeting.capacity}명</span>
        </div>
      </ContentBox>
    </MeetingCardWrapper>
  );
};

const getImgBoxItemStyle = (capacity: number) => {
  if (capacity === 4) return { width: "50%", height: "50%" };
  else if (capacity === 3) return { width: "33.3%", height: "100%" };
  else if (capacity === 2) return { width: "50%", height: "100%" };
};

export default MeetingCard;
