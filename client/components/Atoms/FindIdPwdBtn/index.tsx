import FindIdPwdModal from "components/Blocks/Home/FindIdPwdModal";
import React, { useCallback, useState } from "react";

const FindIdPwdBtn = () => {
  const [openModal, setOpenModal] = useState(false);
  const onClickOpen = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  const onClose = useCallback(() => {
    setOpenModal(false);
  }, []);
  return (
    <>
      <button onClick={onClickOpen}>ID/PWD 찾기</button>
      {openModal && <FindIdPwdModal onClose={onClose} />}
    </>
  );
};

export default FindIdPwdBtn;
