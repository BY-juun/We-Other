import { CustomInput } from "components/Atoms/Common/CustomInput/styles";
import { CustomTextArea } from "components/Atoms/Common/CustomTextArea/styles";
import SelectMeetMate from "components/Organisms/Meeting/SelectMeetMate";
import { useRegistMeeting } from "Hooks/Meeting";
import { useGetUserInfo } from "Hooks/User";
import React, { useCallback, useRef } from "react";
import { useRecoilValue } from "recoil";
import { MeetMate } from "store/meeting";
import { RegisterTop, RegisterContent, ContentItem, RegisterFormItem, AddFriendDescription, AddFriendBox } from "./styles";

const MeetingRegisterTemplate = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const meetMateList = useRecoilValue(MeetMate);
  const { data: UserInfo } = useGetUserInfo();
  const { mutate } = useRegistMeeting();

  const submit = useCallback(() => {
    if (!titleRef.current || !descriptionRef.current) return;
    if (titleRef.current.value === "") return alert("* 제목을 입력해주세요.");
    if (descriptionRef.current.value === "") return alert("* 짧은 설명을 입력해주세요.");
    if (meetMateList.length < 1) return alert("* 함께 참여할 친구를 최소 2명 이상 등록해야해요.");
    const reqData = {
      title: titleRef.current.value,
      sexInfo: String(UserInfo?.sex),
      roomIntro: descriptionRef.current.value,
      capacity: 1 + meetMateList.length,
      meetMateList: meetMateList,
    };
    mutate(reqData);
  }, [meetMateList]);

  return (
    <>
      <RegisterTop>
        <h2>미팅 신청하기</h2>
        <button onClick={submit}>등록</button>
      </RegisterTop>
      <RegisterContent>
        <ContentItem>
          <RegisterFormItem>
            <span>제목</span>
            <CustomInput ref={titleRef} />
          </RegisterFormItem>
          <RegisterFormItem>
            <span>짧은 설명</span>
            <CustomTextArea ref={descriptionRef} />
          </RegisterFormItem>
        </ContentItem>
        <ContentItem>
          <AddFriendDescription>
            함께 참여할 친구를 등록해주세요 <br /> (본인포함 2~4명, 자신과 같은 성별의 친구만 등록할 수 있습니다.)
          </AddFriendDescription>
          <AddFriendBox>
            <SelectMeetMate userSex={String(UserInfo?.sex)} />
          </AddFriendBox>
        </ContentItem>
      </RegisterContent>
    </>
  );
};

export default MeetingRegisterTemplate;
