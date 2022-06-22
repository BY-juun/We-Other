import AddFriendModal from "components/_Modal/AddFriendModal";
import useModal from "Hooks/useModal";
import React from "react";
import { AddFriendButton } from "./styles";

const AddFriendBtn = () => {
  const [open, _, openModal, closeModal] = useModal();

  return (
    <>
      <AddFriendButton onClick={openModal}>친구 추가하기</AddFriendButton>
      {open && <AddFriendModal onClose={closeModal} />}
    </>
  );
};

export default AddFriendBtn;
