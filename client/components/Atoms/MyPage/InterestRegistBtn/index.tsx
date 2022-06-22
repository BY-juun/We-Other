import useModal from "Hooks/useModal";
import React from "react";
import { MyInfoBtn } from "components/Organisms/MyPage/styles";
import InterestRegistModal from "components/_Modal/InterestRegistModal";

const InteresetRegistBtn = () => {
  const [open, _, openModal, closeModal] = useModal();

  return (
    <>
      <MyInfoBtn onClick={openModal}>등록하기</MyInfoBtn>
      {open && <InterestRegistModal onClose={closeModal} />}
    </>
  );
};

export default InteresetRegistBtn;
