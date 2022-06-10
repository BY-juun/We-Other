import { useAddLike } from "Hooks/Post";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useCallback } from "react";

interface Props {
  mode: string;
  commentIdx?: number;
  postIdx?: number;
  children: JSX.Element;
}

const LikeBtn = ({ mode, commentIdx, postIdx, children }: Props) => {
  const AddLikeMutation = useAddLike();

  const onClickLike = useCallback(() => {
    if (Cookies.get("userIdx") === undefined) return alert("* 로그인 후 이용가능합니다");
    const reqData =
      mode === "comment"
        ? {
            CommentIdx: commentIdx,
            type: "comment",
          }
        : { postIdx: postIdx, type: "post" };
    AddLikeMutation.mutate(reqData);
  }, []);

  return <button onClick={onClickLike}>{children}</button>;
};

export default LikeBtn;
