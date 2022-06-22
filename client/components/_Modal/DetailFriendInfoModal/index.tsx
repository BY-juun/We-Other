import React from "react";
import Modal from "../../../Utils/Modal";

const DetailFriendInfoModal = ({ userIdx, onClose }: { userIdx: number; onClose: () => void }) => {
  return (
    <Modal title="상세 정보" onClose={onClose}>
      <div>userIdx : {userIdx}</div>
    </Modal>
  );
};

export default DetailFriendInfoModal;
