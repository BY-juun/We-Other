import React from "react";
import { LinkCardRoot } from "./styles";

const LinkCard = ({ content }: { content: string }) => {
  return (
    <LinkCardRoot>
      <div>{content}</div>
      <img src="/couple.png" />
    </LinkCardRoot>
  );
};

export default LinkCard;
