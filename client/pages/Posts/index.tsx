import PostCard from "components/Blocks/PostCard";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useRef, useState } from "react";
import { useGetPostsList } from "_Query/Post";
import { PostArrayType } from "../../Types/Post";
import { PostCardContainer, PostWrapper, SearchBtn, SearchInput, SerachOpenBtn, WritePostBtn } from "./styles";
import PostCardLoading from "../../components/Loading/PostCardLoading";
import useSearchAnimation from "./Hooks/useSearchAnimation";
import { NextPage } from "next";

const Posts: NextPage = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLInputElement>(null);

  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const { data: PostList, isLoading } = useGetPostsList();

  useSearchAnimation(inputRef, btnRef, openSearch);

  const onClickWritePostBtn = useCallback(() => {
    const userIdx = Cookies.get("userIdx");
    if (!userIdx) return alert("*로그인 후 글을 작성할 수 있습니다");
    router.push("/Write");
  }, []);

  const onClickSearchOpen = useCallback(() => {
    setOpenSearch((prev) => !prev);
  }, []);

  const Search = useCallback(() => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  }, []);

  return (
    <PostWrapper>
      <SerachOpenBtn onClick={onClickSearchOpen}>
        <Image src="/searchOpen.png" alt="검색열기" width={25} height={25} />
      </SerachOpenBtn>
      <SearchInput ref={inputRef} />
      <div onClick={Search}>
        <SearchBtn disabled ref={btnRef} />
      </div>
      <PostCardContainer>
        {!isLoading ? (
          <>
            {PostList.map((PostInfo: PostArrayType, idx: number) => {
              return <PostCard key={idx} PostInfo={PostInfo} />;
            })}
          </>
        ) : (
          <>
            {Array.from({ length: 15 }, () => 1).map(() => (
              <PostCardLoading loading={isLoading} />
            ))}
          </>
        )}
      </PostCardContainer>
      <WritePostBtn onClick={onClickWritePostBtn}>
        <Image src="/write.png" alt="글쓰기" width={25} height={25} />
      </WritePostBtn>
    </PostWrapper>
  );
};

export default Posts;
