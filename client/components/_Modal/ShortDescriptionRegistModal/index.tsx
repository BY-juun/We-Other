import React from "react";
import Modal from "../../../Utils/Modal";
import { CustomInput } from "../../Atoms/Common/CustomInput/styles";
import { AdditionalInfoModalContent, SubmitBtn } from "./styles";

const ShortDescriptionRegistModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal title="자기소개 등록" onClose={onClose}>
      <AdditionalInfoModalContent>
        <div>
          <CustomInput />
        </div>
        <SubmitBtn>완료</SubmitBtn>
      </AdditionalInfoModalContent>
    </Modal>
  );
};

export default ShortDescriptionRegistModal;
