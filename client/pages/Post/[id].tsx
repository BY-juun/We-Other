import { ContentWrapper } from "components/Layouts/Content/styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DummyPosts } from "Utils/dummy";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();

  useEffect(() => {
    let temp = DummyPosts.filter((value) => value.id === Number(id));
    console.log(temp[0]);
    setPost(temp[0]);
  }, []);
  return <ContentWrapper>{id}번 게시글</ContentWrapper>;
};

export default Post;
