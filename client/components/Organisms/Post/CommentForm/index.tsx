import React, { useCallback, useRef } from "react";
import { useSubmitComment } from "Hooks/Comment";
import { CustomInput } from "../../../Atoms/Common/CustomInput/styles";
import { CommentFormRoot } from "./styles";
import { useRouter } from "next/router";
import useIsLoggedIn from "../../../../Hooks/useIsLoggedIn";

const CommentForm = () => {
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();
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
        <CustomInput ref={commentRef} placeholder={!isLoggedIn ? "로그인 후 댓글을 작성할 수 있어요." : "댓글을 입력해주세요."} disabled={!isLoggedIn} />
        <button onClick={submitComment}>등록</button>
      </form>
    </CommentFormRoot>
  );
};

export default CommentForm;
