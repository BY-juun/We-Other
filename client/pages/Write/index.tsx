import ContentForm from "components/Blocks/WritePostForm/ContentForm";
import RegistedImage from "components/Blocks/WritePostForm/RegistedImage";
import TitleForm from "components/Blocks/WritePostForm/TitleForm";
import { NextPage } from "next";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { useSubmitImg, useSubmitPost } from "_Query/Post";
import { GetImageType } from "../../Types/Post";
import { ImageAddBtn, ImageWrapper, PostFormBottom, PostFormTitle, PostFormWrapper, SubmitBtn } from "./styles";

const Write: NextPage = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [fileImage, setFileImage] = useState<Array<GetImageType>>([]);
  const [submitImageIdx, setSubmitImageIdx] = useState<Array<number>>([]);

  const onSuccessSubmitImg = (imageIdxArr: Array<any>) => {
    const imgIdxArr: Array<number> = [];
    const imgSrcArr: Array<GetImageType> = [];
    imageIdxArr.forEach((imageInfo: GetImageType) => {
      imgIdxArr.push(imageInfo.insertId);
      imgSrcArr.push(imageInfo);
    });
    setSubmitImageIdx([...submitImageIdx].concat(imgIdxArr));
    setFileImage([...fileImage].concat(imgSrcArr));
  };

  const submitImgMutation = useSubmitImg(onSuccessSubmitImg);
  const submitPostMutation = useSubmitPost();

  const SubmitPost = useCallback(() => {
    if (!titleRef?.current?.value) return alert("* 제목을 입력해주세요");
    if (!contentRef?.current?.value) return alert("* 내용을 입력해주세요");
    const reqData = {
      title: titleRef?.current?.value,
      content: contentRef?.current?.value,
      imageIdx: submitImageIdx,
    };
    submitPostMutation.mutate(reqData);
  }, [submitImageIdx]);

  const onClickImageUpload = useCallback(() => {
    if (imageRef?.current) imageRef?.current?.click();
  }, []);

  const onChangeImage = useCallback(
    (e) => {
      const imgData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imgData.append("image", f);
      });
      submitImgMutation.mutate(imgData);
    },
    [fileImage]
  );

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
      <ImageWrapper>{fileImage && <RegistedImage fileImage={fileImage} setFileImage={setFileImage} setSubmitImageIdx={setSubmitImageIdx} />}</ImageWrapper>
    </PostFormWrapper>
  );
};

export default Write;
