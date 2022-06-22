import React from "react";
import useGotoPage from "Hooks/useGotoPage";
import { LinkCardRoot } from "./styles";

interface Props {
  content: {
    title: string;
    description: string;
    url: string;
  };
}

const LinkCard = ({ content }: Props) => {
  const { title, description, url } = content;
  const gotoPage = useGotoPage();
  return (
    <LinkCardRoot onClick={gotoPage(url)}>
      <div>{title}</div>
      <span>{description}</span>
    </LinkCardRoot>
  );
};

export default LinkCard;
