import { ContentWrapper } from "components/Layouts/Content/styles";
import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return <ContentWrapper>{id}번 게시글</ContentWrapper>;
};

export default Post;
