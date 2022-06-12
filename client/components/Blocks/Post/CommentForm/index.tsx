import React, { useCallback, useRef } from "react";
import { useSubmitComment } from "Hooks/Comment";
import { CustomInput } from "../../../Atoms/CustomInput/styles";
import { CommentFormRoot } from "./styles";
import { useRouter } from "next/router";

const CommentForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const commentRef = useRef<HTMLInputElement>(null);

  const submitSuccess = useCallback(() => {
    if (commentRef.current) commentRef.current.value = "";
  }, []);

  const submitCommentMutation = useSubmitComment(submitSuccess);

  const submitComment = useCallback((e) => {
    if (!commentRef.current?.value) return alert("* 내용을 작성해주세요");
    const reqData = {
      id: Number(id),
      content: commentRef.current.value,
    };
    submitCommentMutation.mutate(reqData);
    e.preventDefault();
  }, []);

  return (
    <CommentFormRoot>
      <form>
        <CustomInput ref={commentRef} placeholder="댓글" />
        <button onClick={submitComment}>등록</button>
      </form>
    </CommentFormRoot>
  );
};

export default CommentForm;
