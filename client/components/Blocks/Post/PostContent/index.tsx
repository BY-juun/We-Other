import { EtcArea, EtcItem, EtcItem2, EtcLeft } from "components/Blocks/PostCard/styles";
import Image from "next/image";
import React from "react";
import { DummyType } from "Types/Dummy";
import { PostContentArea, PostContentTop, PostDate, PostId, PostTitleArea, ReportBtn } from "./styles";

interface Props {
  id: number;
  post: DummyType | undefined;
}

const PostContent = ({ id, post }: Props) => {
  return (
    <div>
      <PostContentTop>
        <div>
          <PostId>#{id}번 게시글</PostId>
          <PostDate>{post?.date}</PostDate>
        </div>
        <ReportBtn>
          <Image width={15} height={15} src={"/alarm.png"} alt="신고" />
        </ReportBtn>
      </PostContentTop>
      <PostTitleArea>{post?.title}</PostTitleArea>
      <PostContentArea>{post?.content}</PostContentArea>
      <EtcArea>
        <EtcLeft>
          <EtcItem>
            <Image src={"/heart.png"} alt="좋아요" width={15} height={15} />
            <span>{post?.like}</span>
          </EtcItem>
          <EtcItem2>
            <Image src={"/comment.png"} alt="댓글" width={15} height={15} />
            <span>{post?.comment}</span>
          </EtcItem2>
        </EtcLeft>
        <div></div>
      </EtcArea>
    </div>
  );
};

export default PostContent;
