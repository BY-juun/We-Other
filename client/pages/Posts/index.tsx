import { GetPostsListAPI } from "API/Post";
import PostCard from "components/Blocks/PostCard";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { DummyPosts } from "Utils/dummy";
import { useGetPostsList } from "_Query/Post";
import { PostArrayType } from "../../Types/Post";
import { PostCardContainer, PostWrapper, WritePostBtn } from "./styles";
import ClipLoader from "react-spinners/ClipLoader";
import PostCardLoading from "../../components/Loading/PostCardLoading";

const Posts = () => {
	const router = useRouter();

	const { data: PostList, isLoading } = useGetPostsList();

	console.log(PostList);

	const onClickWritePostBtn = useCallback(() => {
		const userIdx = Cookies.get("userIdx");
		if (!userIdx) return alert("*로그인 후 글을 작성할 수 있습니다");
		router.push("/Write");
	}, []);


	return (
		<PostWrapper>
			<PostCardContainer>
				{!isLoading
					?
					<>
						{PostList.map((PostInfo: PostArrayType, idx: number) => {
							return <PostCard key={idx} PostInfo={PostInfo} />;
						})}
					</>
					: <>
						{Array.from({ length: 15 }, () => 1).map(() =>
							<PostCardLoading loading={isLoading} />
						)}
					</>}

			</PostCardContainer>
			<WritePostBtn onClick={onClickWritePostBtn}>
				<Image src="/write.png" alt="글쓰기" width={25} height={25} />
			</WritePostBtn>
		</PostWrapper>
	);
};

export default Posts;
