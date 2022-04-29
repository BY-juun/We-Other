import CommentForm from "components/Blocks/Post/CommentForm";
import CommentList from "components/Blocks/Post/CommentList";
import PostContent from "components/Blocks/Post/PostContent";
import { ContentWrapper } from "components/Layouts/Content/styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DummyType } from "Types/Dummy";
import { DummyPosts } from "Utils/dummy";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<DummyType>();

  useEffect(() => {
    let temp = DummyPosts.filter((value) => value.id === Number(id));
    setPost(temp[0]);
  }, []);
  return (
    <ContentWrapper>
      <PostContent post={post} id={Number(id)} />
      <CommentForm />
      <CommentList />
    </ContentWrapper>
  );
};

export default Post;
