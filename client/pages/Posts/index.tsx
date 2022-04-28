import { GetPostsListAPI } from "API/Post";
import PostCard from "components/Blocks/PostCard";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { dehydrate, QueryClient } from "react-query";
import { DummyPosts } from "Utils/dummy";
import { useGetPostsList } from "_Query/Post";
import { PostCardContainer, PostWrapper, WritePostBtn } from "./styles";

const Posts = () => {
  const router = useRouter();

  const { data: PostList } = useGetPostsList();
  console.log(PostList);

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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["Posts"], () => GetPostsListAPI());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Posts;
