import CommentForm from "components/Blocks/Post/CommentForm";
import CommentList from "components/Blocks/Post/CommentList";
import PostContent from "components/Blocks/Post/PostContent";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useGetPost } from "../../Hooks/Post";
import useIsLoggedIn from "../../Hooks/useIsLoggedIn";
import { CommentType } from "../../Types/Post";
import PageLoading from "../../Utils/PageLoading";

import { CommentListWrapper, PostWrapper, CommentWrapper } from "./styles";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, isLoading } = useGetPost(Number(id));

  const isLoggedIn = useIsLoggedIn();

  return (
    <>
      <PostWrapper>
        {!isLoading ? (
          <>
            <PostContent post={post} />
            <CommentWrapper>
              <CommentForm />
              <CommentListWrapper style={{ filter: !isLoggedIn ? "blur(4px)" : "" }}>
                {post.CommentOfPost.length !== 0 ? (
                  <>
                    {post.CommentOfPost.map((comment: CommentType) => {
                      return <CommentList key={comment.commentIdx} comment={comment} />;
                    })}
                  </>
                ) : (
                  <div>댓글이없습니다</div>
                )}
              </CommentListWrapper>
            </CommentWrapper>
          </>
        ) : (
          <>{PageLoading(isLoading)}</>
        )}
      </PostWrapper>
    </>
  );
};

export default Post;
