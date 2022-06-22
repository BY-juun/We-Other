import React from "react";
import Modal from "Utils/Modal";

const MessageModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal title="쪽지" onClose={onClose}>
      <>쪽지모달</>
    </Modal>
  );
};

export default MessageModal;
