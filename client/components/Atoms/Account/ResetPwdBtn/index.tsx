import React from "react";
import { MyInfoBtn } from "components/Organisms/MyPage/styles";
import CheckPwdModal from "components/_Modal/CheckPwdModal";
import useModal from "Hooks/useModal";

const ResetPwdBtn = ({ email }: { email: string }) => {
  const [open, _, openModal, closeModal] = useModal();

  return (
    <>
      <MyInfoBtn onClick={openModal}>재설정</MyInfoBtn>
      {open && <CheckPwdModal email={email} onClose={closeModal} />}
    </>
  );
};

export default ResetPwdBtn;
