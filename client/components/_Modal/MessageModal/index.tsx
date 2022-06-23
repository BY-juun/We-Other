import NoItem from "components/Molecules/NoMyPosts";
import React from "react";
import Modal from "Utils/Modal";

const MessageModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal title="쪽지" onClose={onClose}>
      <div style={{ height: "50vh" }}>
        <NoItem ment="쪽지함이 비어있어요." />
      </div>
    </Modal>
  );
};

export default MessageModal;
