import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import WriteModal from "../../../_Modal/WriteModal";
import { WritePostBtnRoot } from "./styles";

const WritePostBtn = ({ mode }: { mode?: string }) => {
  const [openWrite, setOpenWrite] = useState(false);
  const { push } = useRouter();
  const onClickBtn = useCallback(() => {
    const userIdx = Cookies.get("userIdx");
    if (!userIdx) return alert("*로그인 후 글을 작성할 수 있습니다");
    if (mode === "Meeting") return push("/Meeting/Register");
    else return setOpenWrite(true);
  }, [push, setOpenWrite]);

  return (
    <>
      <WritePostBtnRoot onClick={onClickBtn}>
        <Image src="/write.png" alt="글쓰기" width={25} height={25} />
      </WritePostBtnRoot>
      {openWrite && <WriteModal onClose={() => setOpenWrite(false)} />}
    </>
  );
};

export default WritePostBtn;
