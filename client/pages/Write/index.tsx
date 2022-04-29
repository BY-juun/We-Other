import ContentForm from "components/Blocks/WritePostForm/ContentForm";
import TitleForm from "components/Blocks/WritePostForm/TitleForm";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { ImageAddBtn, PostFormBottom, PostFormTitle, PostFormWrapper, SubmitBtn } from "./styles";

const Write = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [fileImage, setFileImage] = useState<string>();

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
    setFileImage(URL.createObjectURL(e.target.files[0]));
    const imgData = new FormData();
    // e.target.files.forEach((file) => {
    //   console.log(file);
    // })
    [].forEach.call(e.target.files, (f) => {
      console.log(f);
      imgData.append("image", f);
    });
    console.log(imgData);
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
          {fileImage && <img alt="sample" src={fileImage} style={{ margin: "auto", width: "100px", height: "100px" }} />}
        </div>
        <div>
          <SubmitBtn onClick={SubmitPost}>등록</SubmitBtn>
        </div>
      </PostFormBottom>
    </PostFormWrapper>
  );
};

export default Write;
