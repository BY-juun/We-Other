import MessageModal from "components/_Modal/MessageModal";
import useModal from "Hooks/useModal";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import useOpenMobileMenu from "./Hooks/useOpenMobileMenu";
import GotoFriendListBtn from "../../components/Atoms/Layout/GotoFriendListBtn";
import { MenuBarContent, MenuBarHeader, MobileMenuBarWrapper, MobileOverLay } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenuBar = ({ open, onClose }: Props) => {
  const { push } = useRouter();
  const menubarRef = useRef<HTMLDivElement>(null);
  const [message, , openMessage, closeMessage] = useModal();
  useOpenMobileMenu(open, menubarRef);

  const gotoPage = useCallback(
    (url: string) => () => {
      if (!Cookies.get("userIdx")) return alert("* 로그인 후 이용가능합니다");
      push(url);
    },
    []
  );

  return (
    <>
      {open && <MobileOverLay onClick={onClose} />}
      <MobileMenuBarWrapper ref={menubarRef}>
        <MenuBarHeader onClick={onClose}>
          <Image src="/closeMenuBar.png" alt=">" width={8} height={13} />
        </MenuBarHeader>
        <MenuBarContent>
          <div onClick={gotoPage("/MyPage")}>마이페이지</div>
          <GotoFriendListBtn onClick={gotoPage("/Friends")} />
          <div onClick={gotoPage("/MyPage")}>채팅</div>
          <div onClick={openMessage}>쪽지</div>
        </MenuBarContent>
      </MobileMenuBarWrapper>
      {message && <MessageModal onClose={closeMessage} />}
    </>
  );
};

export default MobileMenuBar;
