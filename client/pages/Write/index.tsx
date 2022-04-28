import ContentForm from "components/Blocks/WritePostForm/ContentForm";
import TitleForm from "components/Blocks/WritePostForm/TitleForm";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { ImageAddBtn, PostFormBottom, PostFormTitle, PostFormWrapper, SubmitBtn } from "./styles";

const Write = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const SubmitPost = useCallback(() => {
    if (!titleRef?.current?.value) return alert("제목을 입력해주세요");
    if (!contentRef?.current?.value) return alert("내용을 입력해주세요");
    console.log(titleRef?.current?.value);
    console.log(contentRef?.current?.value);
  }, []);

  const onClickImageUpload = useCallback(() => {
    if (imageRef?.current) {
      imageRef?.current?.click();
    }
  }, []);

  const onChangeImage = useCallback((e) => {
    const imgArr: never[] = [];
    [].forEach.call(e.target.files, (f) => {
      console.log(f);
      imgArr.push(f);
    });
    console.log(imgArr);
  }, []);

  return (
    <PostFormWrapper>
      <PostFormTitle>글쓰기</PostFormTitle>
      <TitleForm titleRef={titleRef} />
      <ContentForm contentRef={contentRef} />
      <PostFormBottom>
        <div>
          <ImageAddBtn onClick={onClickImageUpload}>
            <Image src="/camera.png" alt="사진" width={25} height={25} />
            <input type="file" name="image" multiple hidden ref={imageRef} onChange={onChangeImage} />
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
