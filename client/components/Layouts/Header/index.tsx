import MessageModal from "components/Blocks/_Modal/MessageModal";
import useModal from "Hooks/useModal";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { menus } from "Utils/headerMenu";
import useGotoPage from "../../../Hooks/useGotoPage";
import MobileMenuBar from "../MobileMenuBar";
import { DesktopItems, HeaderTitle, HeaderWrapper, MessageItem, MobileMenu, OtherItem } from "./styles";

const Header = () => {
  const gotoPage = useGotoPage();
  const [openDrawer, , open, close] = useModal();
  const [message, , openMessage, closeMessage] = useModal();

  return (
    <>
      <HeaderWrapper>
        <div onClick={gotoPage("/")}>
          <HeaderTitle>WeOther</HeaderTitle>
        </div>
        <DesktopItems>
          {menus.map((menu) => {
            return (
              <OtherItem onClick={gotoPage(menu.url)} key={menu.text}>
                {menu.text}
              </OtherItem>
            );
          })}
          <MessageItem onClick={openMessage}>쪽지</MessageItem>
        </DesktopItems>
        <MobileMenu>
          <button onClick={open}>
            <Image src="/menu.png" alt="menu" width={15} height={15} />
          </button>
          <MobileMenuBar open={openDrawer} onClose={close} />
        </MobileMenu>
      </HeaderWrapper>
      {message && <MessageModal onClose={closeMessage} />}
    </>
  );
};

export default Header;
