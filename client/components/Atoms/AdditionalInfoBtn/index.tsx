import useModal from "Hooks/useModal";
import React from "react";
import { MyInfoBtn } from "components/Blocks/MyPage/styles";
import AdditionalInfoModal from "../../Blocks/_Modal/AdditionalInfoModal";

const AdditionalInfoBtn = () => {
  const [open, _, openModal, closeModal] = useModal();

  return (
    <>
      <MyInfoBtn onClick={openModal}>등록하기</MyInfoBtn>
      {open && <AdditionalInfoModal onClose={closeModal} />}
    </>
  );
};

export default AdditionalInfoBtn;
