import React from "react";
import { NoItemWrapper } from "./styles";

const NoItem = ({ ment }: { ment: string }) => {
  return (
    <NoItemWrapper>
      <div>
        <span>{ment}</span>
      </div>
    </NoItemWrapper>
  );
};

export default NoItem;
