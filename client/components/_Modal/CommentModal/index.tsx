import React, { useCallback, useRef } from "react";
import { useSubmitCommentOfComment } from "Hooks/Comment";
import Modal from "Utils/Modal";
import { CustomInput } from "../../Atoms/Common/CustomInput/styles";
import { CommnetWriteForm } from "./styles";

interface Props {
  onClose: () => void;
  commentIdx: number;
  postIdx: number;
}

const CommentModal = ({ onClose, commentIdx, postIdx }: Props) => {
  const commentRef = useRef<HTMLInputElement>(null);

  const onSuccess = useCallback(() => {
    if (commentRef.current) commentRef.current.value = "";
    onClose();
  }, []);

  const submitCommentOfComment = useSubmitCommentOfComment(onSuccess);

  const submit = useCallback((e) => {
    e.preventDefault();
    const submitData = {
      postIdx: postIdx,
      commentIdx: commentIdx,
      content: commentRef?.current?.value || "",
    };
    submitCommentOfComment.mutate(submitData);
  }, []);

  return (
    <Modal onClose={onClose} title="대댓글 작성">
      <>
        <CommnetWriteForm onSubmit={submit}>
          <CustomInput ref={commentRef} placeholder="대댓글을 입력해주세요." />
          <button>등록</button>
        </CommnetWriteForm>
      </>
    </Modal>
  );
};

export default CommentModal;
