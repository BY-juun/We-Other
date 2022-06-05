import FindPartnerModal from "components/Blocks/_Modal/FindPartnerModal";
import React, { useCallback, useState } from "react";
import { PartnerCardRoot } from "./styles";
import { PartnerType } from "Types/Meeting";

interface Props {
  partner: PartnerType[];
  idx: number;
}

const PartnerCard = ({ partner, idx }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const onClickOpen = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onClose = useCallback(() => {
    setOpenModal(false);
  }, []);
  return (
    <>
      <PartnerCardRoot>{isRegist(partner[idx].name) ? <span>{partner[idx].name}</span> : <button onClick={onClickOpen}>아이디 검색</button>}</PartnerCardRoot>
      {openModal && <FindPartnerModal partner={partner} onClose={onClose} idx={idx} />}
    </>
  );
};

const isRegist = (name: string) => {
  if (name === "") return false;
  else return true;
};

export default PartnerCard;
