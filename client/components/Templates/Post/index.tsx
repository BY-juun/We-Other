import { useGetPost } from "Hooks/Post";
import useIsLoggedIn from "Hooks/useIsLoggedIn";
import { useRouter } from "next/router";
import React from "react";
import PostContent from "components/Organisms/Post/PostContent";
import { CommentListWrapper, CommentWrapper } from "./styles";
import CommentForm from "components/Organisms/Post/CommentForm";
import { CommentType } from "Types/Post";
import CommentList from "components/Organisms/Post/CommentList";

const PostTemplate = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: post } = useGetPost(Number(id));
  const isLoggedIn = useIsLoggedIn();

  return (
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
  );
};

export default PostTemplate;
