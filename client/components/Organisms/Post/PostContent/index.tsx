import LikeBtn from "components/Atoms/Post/LikeBtn";
import PostDelBtn from "components/Atoms/Post/PostDelBtn";
import { ReportButton } from "components/Atoms/Post/ReportBtn/styles";
import { EtcArea, EtcItem, EtcItem2, EtcLeft } from "components/Organisms/PostCard/styles";
import Cookies from "js-cookie";
import Image from "next/image";
import { PostType } from "Types/Post";
import { dateForm } from "Utils/dateForm";
import ImageSlider from "components/Molecules/Post/ImageSlider";
import { PostContentArea, PostContentTop, PostContentWrapper, PostDate, PostId, PostTitleArea } from "./styles";

interface Props {
  post: PostType;
}

const PostContent = ({ post }: Props) => {
  return (
    <>
      <PostContentWrapper>
        <PostContentTop>
          <div>
            <PostId>#{post.postIdx}번 게시글</PostId>
            <PostDate>{dateForm(post?.updatedAt)}</PostDate>
          </div>
          <div>
            {post.userIdx === Number(Cookies.get("userIdx")) && <PostDelBtn userIdx={post.userIdx} postIdx={post.postIdx} />}
            <ReportButton />
          </div>
        </PostContentTop>
        <PostTitleArea>{post?.title}</PostTitleArea>
        <PostContentArea>{post?.content}</PostContentArea>
        <EtcArea>
          <EtcLeft>
            <EtcItem>
              <LikeBtn mode="post" postIdx={post.postIdx}>
                <Image src="/heart.png" alt="좋아요" width={25} height={25} />
              </LikeBtn>
              <span>{post.likeCount}</span>
            </EtcItem>
            <EtcItem2>
              <Image src="/comment.png" alt="댓글" width={17} height={17} />
              <span>{post.commentCount}</span>
            </EtcItem2>
          </EtcLeft>
          <div></div>
        </EtcArea>
        {post.imageArray[0] !== null && <ImageSlider images={post.imageArray} />}
      </PostContentWrapper>
    </>
  );
};

export default PostContent;
