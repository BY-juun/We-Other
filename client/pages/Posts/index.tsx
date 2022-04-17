import PostCard from "components/Blocks/PostCard";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { DummyPosts } from "Utils/dummy";
import { PostCardContainer, PostWrapper, WritePostBtn } from "./styles";

const Posts = () => {
  const router = useRouter();
  const onClickWritePostBtn = useCallback(() => {
    const userIdx = Cookies.get("userIdx");
    if (!userIdx) return alert("*로그인 후 글을 작성할 수 있습니다");
    router.push("/Write");
  }, []);
  return (
    <PostWrapper>
      <PostCardContainer>
        {DummyPosts.map((PostInfo, idx) => {
          return <PostCard key={idx} PostInfo={PostInfo} />;
        })}
      </PostCardContainer>
      <WritePostBtn onClick={onClickWritePostBtn}>
        <Image src="/write.png" alt="글쓰기" width={25} height={25} />
      </WritePostBtn>
    </PostWrapper>
  );
};

export default Posts;
