import PostCard from "components/Blocks/PostCard";
import { ContentWrapper } from "components/Layouts/Content/styles";
import React from "react";
import { DummyPosts } from "Utils/dummy";
import { PostCardContainer, PostWrapper } from "./styles";

const Posts = () => {
  return (
    <PostWrapper>
      <PostCardContainer>
        {DummyPosts.map((PostInfo) => {
          return <PostCard PostInfo={PostInfo} />;
        })}
      </PostCardContainer>
    </PostWrapper>
  );
};

export default Posts;
