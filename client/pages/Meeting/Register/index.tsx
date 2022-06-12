import { CustomInput } from "components/Atoms/CustomInput/styles";
import { CustomTextArea } from "components/Atoms/CustomTextArea/styles";
import FriendList from "components/Atoms/FriendList";
import React, { useCallback, useRef } from "react";
import { DummyFriend } from "Types/Dummy";
import { AddFriendBox, AddFriendDescription, ContentItem, RegisterContent, RegisterFormItem, RegisterPageWrapper, RegisterTop } from "./styles";

const MeetingRegister = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const submit = useCallback(() => {
    if (!titleRef.current || !descriptionRef.current) return;
    if (titleRef.current.value === "") return alert("* 제목을 입력해주세요");
    if (descriptionRef.current.value === "") return alert("* 짧은 설명을 입력해주세요");
    console.log(titleRef.current.value);
    console.log(descriptionRef.current.value);
  }, []);

  return (
    <RegisterPageWrapper>
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
          <AddFriendDescription>함께 참여할 친구를 등록해주세요 (최소 2명, 최대 4명)</AddFriendDescription>
          <AddFriendBox>
            {DummyFriend.map((friend) => (
              <FriendList key={friend.userIdx} friend={friend} mode="미팅등록" />
            ))}
          </AddFriendBox>
        </ContentItem>
      </RegisterContent>
    </RegisterPageWrapper>
  );
};

export default MeetingRegister;
