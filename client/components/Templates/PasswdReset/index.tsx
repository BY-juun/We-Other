import { CustomInput } from "components/Atoms/Common/CustomInput/styles";
import { useRouter } from "next/router";
import React, { useCallback, useRef, useState } from "react";
import PageLoading from "Utils/PageLoading";
import { request } from "Utils/request";
import useCheckToken from "./Hooks/useCheckToken";

const PasswdResetTemplate = () => {
  const { push } = useRouter();
  const newPassword = useRef<HTMLInputElement>(null);
  const newPasswordCheck = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userIdx, setUserIdx] = useState<number>(0);

  const submitNewPassword = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!newPassword.current || !newPasswordCheck.current) return;
      if (newPassword.current.value !== newPasswordCheck.current.value) return alert("* 비밀번호와 비밀번호 확인이 일치하지 않습니다");
      const data = await request("PUT", "/user/reset/passwd", { userIdx: userIdx, passwd: newPassword.current.value });
      if (data.isSuccess) {
        alert("* 비밀번호가 변경되었습니다. 메인화면으로 이동합니다.");
        push("/");
      } else alert(data.message);
    },
    [userIdx]
  );

  useCheckToken(setLoading, setUserIdx);

  if (loading) return <> {PageLoading(loading)}</>;

  return (
    <>
      <h1>비밀번호 재설정</h1>
      <form onSubmit={submitNewPassword}>
        <div>
          <span>신규 비밀번호</span>
          <CustomInput type="password" ref={newPassword} />
        </div>
        <div>
          <span>신규 비밀번호 확인</span>
          <CustomInput type="password" ref={newPasswordCheck} />
        </div>
        <button>완료</button>
      </form>
    </>
  );
};

export default PasswdResetTemplate;
