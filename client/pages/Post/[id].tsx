import PostTemplate from "components/Templates/Post";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { GetPostAPI } from "../../API/Post";
import { PostWrapper } from "./styles";

const Post: NextPage = () => {
  return (
    <PostWrapper>
      <PostTemplate />
    </PostWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  const id = query.id;
  await queryClient.prefetchQuery(["Post", Number(id)], () => GetPostAPI(Number(id)));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Post;
