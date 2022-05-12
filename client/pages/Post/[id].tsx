import CommentForm from "components/Blocks/Post/CommentForm";
import CommentList from "components/Blocks/Post/CommentList";
import PostContent from "components/Blocks/Post/PostContent";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DummyType } from "Types/Dummy";
import { DummyPosts } from "Utils/dummy";
import PostLoading from "../../components/Loading/PostLoading";
import { useGetPost } from "../../_Query/Post";
import { CommentListWrapper, PostWrapper, CommentWrapper } from "./styles";

const Post = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data: post, isLoading } = useGetPost(Number(id));

	console.log(post);

	return (
		<PostWrapper>
			{!isLoading
				?
				<>
					<PostContent post={post} id={Number(id)} />
				</>
				: <PostLoading loading={isLoading} />}
			<CommentWrapper>
				<CommentForm />
				<CommentListWrapper></CommentListWrapper>
				{[1, 2, 3, 4, 5].map((value) => {
					return <CommentList />
				})}
			</CommentWrapper>
		</PostWrapper >
	);
};

export default Post;
