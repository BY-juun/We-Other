import MessageModal from "components/Blocks/_Modal/MessageModal";
import useModal from "Hooks/useModal";
import Image from "next/image";
import React, { useRef } from "react";
import { menus } from "Utils/headerMenu";
import useGotoPage from "../../../Hooks/useGotoPage";
import useOpenMobileMenu from "../../../Hooks/useOpenMobileMenu";
import { MenuBarContent, MenuBarHeader, MobileMenuBarWrapper, MobileOverLay } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenuBar = ({ open, onClose }: Props) => {
  const menubarRef = useRef<HTMLDivElement>(null);
  const gotoPage = useGotoPage();
  const [message, , openMessage, closeMessage] = useModal();
  useOpenMobileMenu(open, menubarRef);
  return (
    <>
      {open && <MobileOverLay onClick={onClose} />}
      <MobileMenuBarWrapper ref={menubarRef}>
        <MenuBarHeader onClick={onClose}>
          <Image src="/closeMenuBar.png" alt=">" width={8} height={13} />
        </MenuBarHeader>
        <MenuBarContent>
          {menus.map((menu) => {
            return (
              <div onClick={gotoPage(menu.url)} key={menu.url}>
                {menu.text}
              </div>
            );
          })}
          <div onClick={openMessage}>쪽지</div>
        </MenuBarContent>
      </MobileMenuBarWrapper>
      {message && <MessageModal onClose={closeMessage} />}
    </>
  );
};

export default MobileMenuBar;
