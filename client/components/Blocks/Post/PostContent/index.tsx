import { EtcArea, EtcItem, EtcItem2, EtcLeft } from "components/Blocks/PostCard/styles";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { PostType } from "../../../../Types/Post";
import { dateForm } from "../../../../Utils/dateForm";
import { useDeletePost } from "../../../../_Query/Post";
import ImageSlider from "../../../Atoms/ImageSlider";
import { DeleteBtn, PostContentArea, PostContentTop, PostContentWrapper, PostDate, PostId, PostTitleArea, ReportBtn } from "./styles";

interface Props {
	id: number;
	post: PostType;
}

const PostContent = ({ id, post }: Props) => {

	const router = useRouter();

	const onSuccessDelete = useCallback(() => {
		alert("* 삭제완료가 완료되었습니다.");
		router.push("/Posts");
	}, []);

	const deletePost = useCallback(() => {
		if (post.userIdx !== Number(Cookies.get("userIdx"))) return;
		if (window.confirm("* 해당 게시글을 삭제하시겠습니까?")) {
			deleteMutation.mutate(id);
		}
	}, [])

	const deleteMutation = useDeletePost(onSuccessDelete);

	return (
		<PostContentWrapper>
			<PostContentTop>
				<div>
					<PostId>#{id}번 게시글</PostId>
					<PostDate>{dateForm(post?.updatedAt)}</PostDate>
				</div>
				<div>
					{post.userIdx === Number(Cookies.get("userIdx")) && <DeleteBtn onClick={deletePost}>지우기</DeleteBtn>}
					<ReportBtn>
						<Image width={15} height={15} src={"/alarm.png"} alt="신고" />
					</ReportBtn>
				</div>
			</PostContentTop>
			<PostTitleArea>{post?.title}</PostTitleArea>
			<PostContentArea>{post?.content}</PostContentArea>
			<EtcArea>
				<EtcLeft>
					<EtcItem>
						<Image src={"/heart.png"} alt="좋아요" width={15} height={15} />
						{/* <span>{post?.like}</span> */}
					</EtcItem>
					<EtcItem2>
						<Image src={"/comment.png"} alt="댓글" width={15} height={15} />
						{/* <span>{post?.comment}</span> */}
					</EtcItem2>
				</EtcLeft>
				<div>
				</div>
			</EtcArea>
			{post.imageArray[0] !== null && <ImageSlider images={post.imageArray} />}
		</PostContentWrapper>
	);
};

export default PostContent;
