import CommentModal from "components/Blocks/_Modal/CommentModal";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

interface Props {
  commentIdx: number;
}

const CommentBtn = ({ commentIdx }: Props) => {
  const { query } = useRouter();
  const { id } = query;

  const [openCommentModal, setOpenCommentModal] = useState<boolean>(false);

  const clickCommentModalOpen = useCallback(() => {
    setOpenCommentModal(true);
  }, []);

  const closeCommentModal = useCallback(() => {
    setOpenCommentModal(false);
  }, []);

  return (
    <>
      <button style={{ marginBottom: "3px" }} onClick={clickCommentModalOpen}>
        <Image src="/comment.png" alt="User" width={13} height={13} />
      </button>
      {openCommentModal && <CommentModal onClose={closeCommentModal} commentIdx={commentIdx} postIdx={Number(id)} />}
    </>
  );
};

export default CommentBtn;
