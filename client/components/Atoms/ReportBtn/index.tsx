import ReportModal from "components/Blocks/_Modal/ReportModal";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { ReportButton } from "./styles";

const ReportBtn = () => {
  const [openReport, setOpenReport] = useState<boolean>(false);

  const onClickOpenReport = useCallback(() => {
    setOpenReport(true);
  }, []);

  return (
    <>
      <ReportButton onClick={onClickOpenReport}>
        <Image width={20} height={20} src={"/alarm.png"} alt="신고" />
      </ReportButton>
      {openReport && <ReportModal setOpenReport={setOpenReport} />}
    </>
  );
};

export default ReportBtn;
