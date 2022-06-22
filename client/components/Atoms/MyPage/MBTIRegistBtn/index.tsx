import useModal from "Hooks/useModal";
import React from "react";
import { MyInfoBtn } from "components/Organisms/MyPage/styles";
import MBTIRegistModal from "../../../_Modal/MBTIRegistModal";

const MBTIRegistBtn = () => {
  const [open, _, openModal, closeModal] = useModal();

  return (
    <>
      <MyInfoBtn onClick={openModal}>등록하기</MyInfoBtn>
      {open && <MBTIRegistModal onClose={closeModal} />}
    </>
  );
};

export default MBTIRegistBtn;
