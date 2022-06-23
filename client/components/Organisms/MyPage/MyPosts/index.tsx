import NoItem from "components/Molecules/NoMyPosts";
import React from "react";
import { MyPostsItem } from "./styles";

const MyPosts = () => {
  return (
    <>
      <MyPostsItem>
        <h2>내가 작성한 흥신소 게시글</h2>
        <NoItem ment="등록된 게시글이 없어요 :(" />
      </MyPostsItem>
      <MyPostsItem>
        <h2>내가 작성한 미팅 게시글</h2>
        <NoItem ment="등록된 게시글이 없어요 :(" />
      </MyPostsItem>
    </>
  );
};

export default MyPosts;
