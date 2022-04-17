import { CustomTextArea } from "components/Atoms/CustomTextArea/styles";
import React from "react";
import { ContentFromWrapper, Title } from "./styles";

interface Props {
  contentRef: React.RefObject<HTMLTextAreaElement>;
}

const ContentForm = ({ contentRef }: Props) => {
  return (
    <ContentFromWrapper>
      <Title>내용</Title>
      <CustomTextArea ref={contentRef} />
    </ContentFromWrapper>
  );
};

export default ContentForm;
