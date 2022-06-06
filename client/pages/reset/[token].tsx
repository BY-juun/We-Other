import { CustomInput } from "components/Atoms/CustomInput/styles";
import { ContentWrapper } from "components/Layouts/Content/styles";
import React, { useCallback, useRef } from "react";
import { ResetWrapper } from "./styles";

const reset = () => {
  const newPassword = useRef<HTMLInputElement>(null);
  const newPasswordCheck = useRef<HTMLInputElement>(null);
  const submitNewPassword = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newPassword.current || !newPasswordCheck.current) return;
    if (newPassword.current.value !== newPasswordCheck.current.value) return alert("* 비밀번호와 비밀번호 확인이 일치하지 않습니다");
    console.log(newPassword.current.value);
    console.log(newPasswordCheck.current.value);
  }, []);
  return (
    <ContentWrapper>
      <ResetWrapper>
        <h1>비밀번호 재설정</h1>
        <form onSubmit={submitNewPassword}>
          <div>
            <span>신규 비밀번호</span>
            <CustomInput type="password" />
          </div>
          <div>
            <span>신규 비밀번호 확인</span>
            <CustomInput type="password" />
          </div>
          <button>완료</button>
        </form>
      </ResetWrapper>
    </ContentWrapper>
  );
};

export default reset;
