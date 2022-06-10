import { CustomInput } from "components/Atoms/CustomInput/styles";
import React from "react";
import Modal from "Utils/Modal";
import { ModalContent, ModalDescription } from "./styles";

const AddFriendModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal title="친구 추가하기" onClose={onClose}>
      <>
        <ModalDescription>* 친구의 이메일을 입력해주세요!</ModalDescription>
        <ModalContent>
          <CustomInput />
          <button>추가</button>
        </ModalContent>
      </>
    </Modal>
  );
};

export default AddFriendModal;
