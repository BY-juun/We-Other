import ContentForm from "components/Blocks/WritePostForm/ContentForm";
import TitleForm from "components/Blocks/WritePostForm/TitleForm";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { ImageAddBtn, PostFormBottom, PostFormTitle, PostFormWrapper, SubmitBtn } from "./styles";

const Write = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const SubmitPost = useCallback(() => {
    if (!titleRef?.current?.value) return alert("제목을 입력해주세요");
    if (!contentRef?.current?.value) return alert("내용을 입력해주세요");
    console.log(titleRef?.current?.value);
    console.log(contentRef?.current?.value);
  }, []);

  return (
    <PostFormWrapper>
      <PostFormTitle>글쓰기</PostFormTitle>
      <TitleForm titleRef={titleRef} />
      <ContentForm contentRef={contentRef} />
      <PostFormBottom>
        <div>
          <ImageAddBtn>
            <Image src="/camera.png" alt="사진" width={25} height={25} />
          </ImageAddBtn>
        </div>
        <div>
          <SubmitBtn onClick={SubmitPost}>등록</SubmitBtn>
        </div>
      </PostFormBottom>
    </PostFormWrapper>
  );
};

export default Write;
