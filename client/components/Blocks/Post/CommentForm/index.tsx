import React, { useCallback, useRef } from "react";
import { useSubmitComment } from "_Query/Comment";
import { CommentFormRoot } from "./styles";

const CommentForm = ({ id }: { id: number }) => {
  const commentRef = useRef<HTMLInputElement>(null);

  const submitSuccess = useCallback(() => {
    alert("댓글 등록 성공! >> 이후 처리 해야함.");
  }, []);

  const submitCommentMutation = useSubmitComment(submitSuccess);

  const submitComment = useCallback(() => {
    if (!commentRef.current?.value) return alert("* 내용을 작성해주세요");
    const reqData = {
      id: id,
      content: commentRef.current.value,
    };
    submitCommentMutation.mutate(reqData);
  }, []);

  return (
    <CommentFormRoot>
      <form>
        <input ref={commentRef} placeholder="댓글" />
        <button onClick={submitComment}>등록</button>
      </form>
    </CommentFormRoot>
  );
};

export default CommentForm;
