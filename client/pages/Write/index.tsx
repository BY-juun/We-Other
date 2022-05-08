import ContentForm from "components/Blocks/WritePostForm/ContentForm";
import TitleForm from "components/Blocks/WritePostForm/TitleForm";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { useSubmitImg } from "_Query/Post";
import { ImageAddBtn, ImageWrapper, PostFormBottom, PostFormTitle, PostFormWrapper, SubmitBtn } from "./styles";

const Write = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [fileImage, setFileImage] = useState<Array<string>>([]);

  const onSuccessSubmitImg = () => {
    console.log("success");
  };

  const submitImgMutation = useSubmitImg(onSuccessSubmitImg);

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

  const onChangeImage = useCallback(
    (e) => {
      console.log(e.target.files);
      let temp = [...fileImage];
      for (let x of e.target.files) {
        temp.push(URL.createObjectURL(x));
      }
      setFileImage(temp);
      const imgData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imgData.append("image", f);
      });
      submitImgMutation.mutate(imgData);
    },
    [fileImage]
  );

  const filterImg = useCallback((file) => {
    setFileImage((prev) => prev?.filter((prevFile) => prevFile !== file));
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
      <ImageWrapper>
        {fileImage &&
          fileImage.map((file) => {
            return (
              <div>
                <img key={file} alt="sample" src={file} />
                <button onClick={() => filterImg(file)}>삭제</button>
              </div>
            );
          })}
      </ImageWrapper>
    </PostFormWrapper>
  );
};

export default Write;
