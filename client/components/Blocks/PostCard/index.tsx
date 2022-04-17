import React, { useCallback } from "react";
import { DummyType } from "Types/Dummy";
import { EtcArea, EtcItem, EtcItem2, EtcLeft, PostCardRoot, PostContent, PostDate, PostWriter } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  PostInfo: DummyType;
}

const PostCard = ({ PostInfo }: Props) => {
  const router = useRouter();
  const gotoPost = useCallback(
    (id: number) => () => {
      router.push(`/Post/${id}`);
    },
    []
  );
  return (
    <PostCardRoot onClick={gotoPost(PostInfo.id)}>
      <PostContent>{PostInfo.content}</PostContent>
      <PostDate>{PostInfo.date}</PostDate>
      <EtcArea>
        <EtcLeft>
          <EtcItem>
            <Image src={"/heart.png"} alt="좋아요" width={15} height={15} />
            <span>{PostInfo.like}</span>
          </EtcItem>
          <EtcItem2>
            <Image src={"/comment.png"} alt="댓글" width={13} height={13} />
            <span>{PostInfo.comment}</span>
          </EtcItem2>
        </EtcLeft>
        <div>
          {" "}
          <Image src={"/alarm.png"} alt="신고" width={13} height={13} />
        </div>
      </EtcArea>
    </PostCardRoot>
  );
};

export default PostCard;
