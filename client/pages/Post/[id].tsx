import CommentForm from "components/Blocks/Post/CommentForm";
import CommentList from "components/Blocks/Post/CommentList";
import PostContent from "components/Blocks/Post/PostContent";
import Cookies from "js-cookie";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import PostLoading from "../../components/Loading/PostLoading";
import { useGetPost } from "../../_Query/Post";
import { CommentListWrapper, PostWrapper, CommentWrapper, GoBackBtn } from "./styles";

const Post: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data: post, isLoading } = useGetPost(Number(id));


	return (
		<>
			<PostWrapper>
				{/* <GoBackBtn>
					<Image src="/back_icon.png" width={18} height={13} /><span>뒤로가기</span>
				</GoBackBtn> */}
				{!isLoading ? (
					<>
						<PostContent post={post} id={Number(id)} />
					</>
				) : (
					<PostLoading loading={isLoading} />
				)}
				<CommentWrapper>
					<CommentForm id={Number(id)} />
					<CommentListWrapper style={{ filter: !Cookies.get("userIdx") ? "blur(4px)" : "" }}>
						{[1, 2, 3, 4, 5].map((value) => {
							return <CommentList />;
						})}
					</CommentListWrapper>
				</CommentWrapper>
			</PostWrapper>
		</>
	);
};

export default Post;
