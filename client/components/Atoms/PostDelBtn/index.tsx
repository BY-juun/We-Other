import { useDeletePost } from "Hooks/Post";
import Cookies from "js-cookie";
import React, { useCallback } from "react";
import { PostDelButton } from "./styles";

interface Props {
  userIdx: number;
  postIdx: number;
}

const PostDelBtn = ({ userIdx, postIdx }: Props) => {
  const deleteMutation = useDeletePost();

  const deletePost = useCallback(() => {
    if (userIdx !== Number(Cookies.get("userIdx"))) return;
    if (window.confirm("* 해당 게시글을 삭제하시겠습니까?")) deleteMutation.mutate(postIdx);
  }, []);

  return <PostDelButton onClick={deletePost}>지우기</PostDelButton>;
};

export default PostDelBtn;
