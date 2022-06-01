import React from "react";
import SearchBtn from "../../components/Atoms/SearchBtn";
import WritePostBtn from "../../components/Atoms/WritePostBtn";

const Meeting = () => {
  return (
    <div>
      <SearchBtn />
      <WritePostBtn mode="Meeting" />
    </div>
  );
};

export default Meeting;
