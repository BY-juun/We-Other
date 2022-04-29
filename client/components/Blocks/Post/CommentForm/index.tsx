import React from "react";
import { CommentFormRoot } from "./styles";

const CommentForm = () => {
  return (
    <CommentFormRoot>
      <input placeholder="댓글" />
      <button>등록</button>
    </CommentFormRoot>
  );
};

export default CommentForm;
