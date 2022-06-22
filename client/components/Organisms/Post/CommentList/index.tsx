import CommentBtn from "components/Atoms/Post/CommentBtn";
import LikeBtn from "components/Atoms/Post/LikeBtn";
import Image from "next/image";
import React from "react";
import { CommentType } from "Types/Post";
import { dateFormDetail } from "Utils/dateFormDetail";
import CommentOfComment from "../../../Molecules/Post/CommentOfComment";
import { CommentContent, CommentDate, CommentListRoot, CommentListTop, CommentRight, UnknownUserImg } from "./styles";

const CommentList = ({ comment }: { comment: CommentType }) => {
  return (
    <>
      <CommentListRoot>
        <CommentListTop>
          <div>
            <UnknownUserImg src="/defaultUser.png" alt="User" />
            <span>익명{comment.orderOfComment}</span>
          </div>
          <CommentRight>
            <CommentBtn commentIdx={comment.commentIdx} />
            <LikeBtn mode="comment" commentIdx={comment.commentIdx}>
              <Image src="/heart.png" alt="User" width={15} height={15} />
            </LikeBtn>
          </CommentRight>
        </CommentListTop>
        <CommentContent>{comment.content}</CommentContent>
        <CommentDate>{dateFormDetail(comment.createdAt)}</CommentDate>
        {comment.commentOfComment &&
          comment.commentOfComment.map((commentOfComment, idx) => {
            return <CommentOfComment key={commentOfComment.commentIdx + idx} commentOfComment={commentOfComment} />;
          })}
      </CommentListRoot>
    </>
  );
};

export default CommentList;
