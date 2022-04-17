import { CustomInput } from "components/Atoms/CustomInput/styles";
import React from "react";
import { Title, TitleFormWrapper } from "./styles";

interface Props {
  titleRef: React.RefObject<HTMLInputElement>;
}

const TitleForm = ({ titleRef }: Props) => {
  return (
    <TitleFormWrapper>
      <Title>제목</Title>
      <CustomInput ref={titleRef} />
    </TitleFormWrapper>
  );
};

export default TitleForm;
