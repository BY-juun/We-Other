import React, { useCallback } from "react";
import { DummyType } from "Types/Dummy";
import { EtcArea, EtcItem, EtcItem2, EtcLeft, PostCardRoot, PostContent, PostDate, PostTitle, PostWriter } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { PostArrayType } from "../../../Types/Post";
import { dateForm } from "../../../Utils/dateForm";
import { ServerURL } from "../../../Utils/ServerURL";
import useGotoPage from "../../../Hooks/useGotoPage";

interface Props {
  PostInfo: PostArrayType;
}

const PostCard: (props: Props) => JSX.Element = ({ PostInfo }) => {
  const gotoPage = useGotoPage();

  return (
    <PostCardRoot onClick={gotoPage(`/Post/${PostInfo.postIdx}`)}>
      <div>
        <PostTitle>{PostInfo.title}</PostTitle>
        <PostContent>{PostInfo.content}</PostContent>
        <EtcArea>
          <EtcLeft>
            <EtcItem>
              <PostDate>{dateForm(PostInfo.updatedAt)}</PostDate>
              <Image src={"/heart.png"} alt="좋아요" width={15} height={15} />
              <span>{PostInfo.likeCount}</span>
            </EtcItem>
            <EtcItem2>
              <Image src={"/comment.png"} alt="댓글" width={15} height={15} />
              <span>{PostInfo.commentCount}</span>
            </EtcItem2>
          </EtcLeft>
          <div></div>
        </EtcArea>
      </div>
      <div>{PostInfo.url && <img src={`${ServerURL}/${PostInfo.url}`} width={125} height={75} />}</div>
    </PostCardRoot>
  );
};

export default PostCard;
