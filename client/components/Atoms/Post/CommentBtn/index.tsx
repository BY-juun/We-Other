import CommentModal from "components/_Modal/CommentModal";
import useModal from "Hooks/useModal";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  commentIdx: number;
}

const CommentBtn = ({ commentIdx }: Props) => {
  const { query } = useRouter();
  const { id } = query;

  const [open, _, openModal, closeModal] = useModal();

  return (
    <>
      <button style={{ marginBottom: "3px" }} onClick={openModal}>
        <Image src="/comment.png" alt="User" width={13} height={13} />
      </button>
      {open && <CommentModal onClose={closeModal} commentIdx={commentIdx} postIdx={Number(id)} />}
    </>
  );
};

export default CommentBtn;
