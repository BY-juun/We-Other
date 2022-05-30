import PostCard from "components/Blocks/PostCard";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { PostArrayType } from "../../Types/Post";
import { PostCardContainer, PostWrapper, SerachOpenBtn, WritePostBtn } from "./styles";
import { NextPage } from "next";
import SearchModal from "../../components/Blocks/Post/SearchModal";
import { useGetPostsList } from "../../Hooks/Post";
import PostCardSkeleton from "../../components/Blocks/PostCard/Skeleton";

const Posts: NextPage = () => {
	const router = useRouter();
	const [openSearch, setOpenSearch] = useState<boolean>(false);
	const { data: PostList, isLoading } = useGetPostsList();

	const onClickWritePostBtn = useCallback(() => {
		const userIdx = Cookies.get("userIdx");
		if (!userIdx) return alert("*로그인 후 글을 작성할 수 있습니다");
		router.push("/Write");
	}, []);

	const onClickSearchOpen = useCallback(() => {
		setOpenSearch((prev) => !prev);
	}, []);

	return (
		<PostWrapper>
			<SerachOpenBtn onClick={onClickSearchOpen}>
				<Image src="/searchOpen.png" alt="검색열기" width={25} height={25} />
			</SerachOpenBtn>
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
			<WritePostBtn onClick={onClickWritePostBtn}>
				<Image src="/write.png" alt="글쓰기" width={25} height={25} />
			</WritePostBtn>
			{openSearch && <SearchModal setOpenSearch={setOpenSearch} />}
		</PostWrapper>
	);
};

export default Posts;
