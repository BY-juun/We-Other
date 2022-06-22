import useModal from "Hooks/useModal";
import React from "react";
import { MyInfoBtn } from "components/Organisms/MyPage/styles";
import ShortDescriptionRegistModal from "../../../_Modal/ShortDescriptionRegistModal";

const ShortDescriptionRegistBtn = () => {
  const [open, _, openModal, closeModal] = useModal();

  return (
    <>
      <MyInfoBtn onClick={openModal}>등록하기</MyInfoBtn>
      {open && <ShortDescriptionRegistModal onClose={closeModal} />}
    </>
  );
};

export default ShortDescriptionRegistBtn;
