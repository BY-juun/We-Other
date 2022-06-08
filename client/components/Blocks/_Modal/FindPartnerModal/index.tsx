import { CustomInput } from "components/Atoms/CustomInput/styles";
import React, { useCallback, useContext, useRef } from "react";
import Modal from "Utils/Modal";
import { SearchFormWrapper } from "../SearchModal/styles";
import { PartnerType } from "Types/Meeting";
import { MeetingContext } from "pages/Meeting/Register";

interface Props {
  partner: PartnerType[];
  //setPartner: React.Dispatch<React.SetStateAction<PartnerType[]>>;
  onClose: () => void;
  idx: number;
}

const FindPartnerModal = ({ partner, onClose, idx }: Props) => {
  const idRef = useRef<HTMLInputElement>(null);
  const context = useContext(MeetingContext);
  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!idRef.current) return;
      const registedData = {
        userIdx: 1,
        name: idRef.current.value,
        department: "",
        MBTI: "ESFP",
        description: "",
        idx: idx,
      };
      let temp = [...partner];
      temp[idx] = registedData;
      context?.setPartner(temp);
      onClose();
    },
    [idx, partner, context?.setPartner, onClose]
  );

  return (
    <Modal title="사용자 아이디 검색" onClose={onClose}>
      <SearchFormWrapper onSubmit={submit}>
        <CustomInput ref={idRef} placeholder="아이디를 입력해주세요" />
        <button>검색</button>
      </SearchFormWrapper>
    </Modal>
  );
};

export default FindPartnerModal;
