import PostCard from "components/Blocks/PostCard";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { PostArrayType } from "../../Types/Post";
import { PostCardContainer, PostWrapper } from "./styles";
import { NextPage } from "next";
import { useGetPostsList } from "../../Hooks/Post";
import PostCardSkeleton from "../../components/Blocks/PostCard/Skeleton";
import WritePostBtn from "../../components/Atoms/WritePostBtn";
import SearchBtn from "../../components/Atoms/SearchBtn";
const Posts: NextPage = () => {

	const { data: PostList, isLoading } = useGetPostsList();

	return (
		<PostWrapper>
			<SearchBtn />
			<PostCardContainer>
				{!isLoading ? (
					<>
						{PostList.map((PostInfo: PostArrayType, idx: number) => {
							return <PostCard key={idx} PostInfo={PostInfo} />;
						})}
					</>
				) : (
					<>
						{Array.from({ length: 15 }, () => 1).map((_, idx) => (
							<PostCardSkeleton key={idx + 100} />
						))}
					</>
				)}
			</PostCardContainer>
			<WritePostBtn />
		</PostWrapper>
	);
};

export default Posts;
