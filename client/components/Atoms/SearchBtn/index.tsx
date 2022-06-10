import useModal from "Hooks/useModal";
import Image from "next/image";
import React from "react";
import SearchModal from "../../Blocks/_Modal/SearchModal";
import { SerachOpenBtn } from "./styles";

const SearchBtn = () => {
  const [open, _, openModal, closeModal] = useModal();

  return (
    <>
      <SerachOpenBtn onClick={openModal}>
        <Image src="/searchOpen.png" alt="검색열기" width={25} height={25} />
      </SerachOpenBtn>
      {open && <SearchModal onClose={closeModal} />}
    </>
  );
};

export default SearchBtn;
