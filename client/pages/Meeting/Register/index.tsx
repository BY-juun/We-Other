import { CustomInput } from "components/Atoms/CustomInput/styles";
import { CustomTextArea } from "components/Atoms/CustomTextArea/styles";
import RegisterPartner from "components/Blocks/RegisterMeeting/RegisterPartner";
import React, { useCallback, useRef, useState } from "react";
import { PartnerType } from "Types/Meeting";
import { dummyPartner } from "Utils/dummy";
import { RegisterFormItem, RegisterPageWrapper, RegisterTop } from "./styles";
import { isAllRegist, isRegist, meetingOption } from "./util";

const MeetingRegister = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [numOfPeople, setNumOfPeople] = useState<number>(2);
  const [partner, setPartner] = useState<Array<PartnerType>>([dummyPartner, dummyPartner]);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const onChangeNumOfPeople = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (
        isRegist(
          partner.map((v) => v.name),
          numOfPeople
        )
      ) {
        if (!window.confirm("등록된 사용자가 있습니다.\n인원을 변경할 경우, 등록된 사용자가 초기화됩니다.\n그래도 인원을 변경하시겠습니까?")) return;
      }
      setNumOfPeople(Number(e.target.value));
      setPartner(Array.from({ length: Number(e.target.value) }, () => dummyPartner));
    },
    [numOfPeople, partner]
  );

  const submit = useCallback(() => {
    if (!titleRef.current || !descriptionRef.current) return;
    if (titleRef.current.value === "") return alert("* 제목을 입력해주세요");
    if (descriptionRef.current.value === "") return alert("* 짧은 설명을 입력해주세요");
    if (!isAllRegist(partner.map((v) => v.name))) return alert("* 파트너를 전부 등록해주세요");
    console.log(titleRef.current.value);
    console.log(descriptionRef.current.value);
    console.log(partner);
  }, [partner]);

  return (
    <RegisterPageWrapper>
      <RegisterTop>
        <h2>미팅 신청하기</h2>
        <button onClick={submit}>등록</button>
      </RegisterTop>
      <RegisterFormItem>
        <span>제목</span>
        <CustomInput ref={titleRef} />
      </RegisterFormItem>
      <RegisterFormItem>
        <span>인원</span>
        <select value={numOfPeople} onChange={onChangeNumOfPeople}>
          {meetingOption.map((option) => {
            return (
              <option value={option.num} key={option.text}>
                {option.text}
              </option>
            );
          })}
        </select>
      </RegisterFormItem>
      <RegisterPartner partner={partner} setPartner={setPartner} />
      <RegisterFormItem>
        <div>
          <span>짧은 설명</span>
          <CustomTextArea ref={descriptionRef} />
        </div>
      </RegisterFormItem>
    </RegisterPageWrapper>
  );
};

export default MeetingRegister;
