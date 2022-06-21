import PostCard from "components/Blocks/PostCard";
import React from "react";
import { PostArrayType } from "../../Types/Post";
import { PostCardContainer, PostWrapper } from "./styles";
import { GetServerSideProps, NextPage } from "next";
import { useGetPostsList } from "../../Hooks/Post";
import PostCardSkeleton from "../../components/Blocks/PostCard/Skeleton";
import WritePostBtn from "../../components/Atoms/WritePostBtn";
import SearchBtn from "../../components/Atoms/SearchBtn";
import { dehydrate, QueryClient } from "react-query";
import { GetPostsListAPI } from "../../API/Post";
const Posts: NextPage = () => {

	const { data: PostList } = useGetPostsList();
	return (
		<PostWrapper>
			<SearchBtn />
			<PostCardContainer>
				{PostList.map((PostInfo: PostArrayType, idx: number) => {
					return <PostCard key={idx} PostInfo={PostInfo} />;
				})}
				{/* // 	{Array.from({ length: 15 }, () => 1).map((_, idx) => (
					// 		<PostCardSkeleton key={idx + 100} />
					// 	))}
					// </> */}
			</PostCardContainer>
			<WritePostBtn />
		</PostWrapper>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(["Posts"], () => GetPostsListAPI())
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default Posts;
