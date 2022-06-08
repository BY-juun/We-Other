import { EtcArea, EtcItem, EtcItem2, EtcLeft } from "components/Blocks/PostCard/styles";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useAddLike, useDeletePost } from "../../../../Hooks/Post";
import { PostType } from "../../../../Types/Post";
import { dateForm } from "../../../../Utils/dateForm";
import ImageSlider from "../../../Atoms/ImageSlider";
import ReportModal from "../../_Modal/ReportModal";
import { DeleteBtn, PostContentArea, PostContentTop, PostContentWrapper, PostDate, PostId, PostTitleArea, ReportBtn } from "./styles";

interface Props {
	id: number;
	post: PostType;
}

const PostContent = ({ id, post }: Props) => {
	const deleteMutation = useDeletePost();

	const [openReport, setOpenReport] = useState<boolean>(false);

	const AddLikeMutation = useAddLike();

	const deletePost = useCallback(() => {
		if (post.userIdx !== Number(Cookies.get("userIdx"))) return;
		if (window.confirm("* 해당 게시글을 삭제하시겠습니까?")) deleteMutation.mutate(id);
	}, []);

	const onClickOpenReport = useCallback(() => {
		setOpenReport(true);
	}, [])

	const onClickLikeBtn = useCallback(() => {
		if (Cookies.get("userIdx") === undefined) return alert("* 로그인 후 이용가능합니다");
		const reqData = {
			postIdx: Number(id),
			type: "post"
		}
		AddLikeMutation.mutate(reqData);
	}, [])

	return (
		<>
			<PostContentWrapper>
				<PostContentTop>
					<div>
						<PostId>#{id}번 게시글</PostId>
						<PostDate>{dateForm(post?.updatedAt)}</PostDate>
					</div>
					<div>
						{post.userIdx === Number(Cookies.get("userIdx")) && <DeleteBtn onClick={deletePost}>지우기</DeleteBtn>}
						<ReportBtn onClick={onClickOpenReport}>
							<Image width={20} height={20} src={"/alarm.png"} alt="신고" />
						</ReportBtn>
					</div>
				</PostContentTop>
				<PostTitleArea>{post?.title}</PostTitleArea>
				<PostContentArea>{post?.content}</PostContentArea>
				<EtcArea>
					<EtcLeft>
						<EtcItem onClick={onClickLikeBtn}>
							<Image src="/heart.png" alt="좋아요" width={25} height={25} />
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
			{openReport && <ReportModal setOpenReport={setOpenReport} />}
		</>
	);
};

export default PostContent;
