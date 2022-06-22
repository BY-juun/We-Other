import ReportModal from "components/_Modal/ReportModal";
import useModal from "Hooks/useModal";
import Image from "next/image";
import React from "react";
import { ReportButton } from "./styles";

const ReportBtn = () => {
  const [openReport, _, openModal, closeModal] = useModal();

  return (
    <>
      <ReportButton onClick={openModal}>
        <Image width={20} height={20} src={"/alarm.png"} alt="신고" />
      </ReportButton>
      {openReport && <ReportModal onClose={closeModal} />}
    </>
  );
};

export default ReportBtn;
