import FindIdPwdModal from "components/Blocks/Home/FindIdPwdModal";
import useModal from "Hooks/useModal";
import React from "react";

const FindIdPwdBtn = () => {
  const [open, _, openModal, closeModal] = useModal();
  return (
    <>
      <button onClick={openModal}>ID/PWD 찾기</button>
      {open && <FindIdPwdModal onClose={closeModal} />}
    </>
  );
};

export default FindIdPwdBtn;
