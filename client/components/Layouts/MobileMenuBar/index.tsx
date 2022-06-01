import Image from "next/image";
import React, { useRef } from "react";
import { menus } from "Utils/headerMenu";
import useOpenMobileMenu from "../../../Hooks/useOpenMobileMenu";
import { MenuBarContent, MenuBarHeader, MobileMenuBarWrapper, MobileOverLay } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenuBar = ({ open, onClose }: Props) => {
  const menubarRef = useRef<HTMLDivElement>(null);
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
            return <div key={menu.text}>{menu.text}</div>;
          })}
        </MenuBarContent>
      </MobileMenuBarWrapper>
    </>
  );
};

export default MobileMenuBar;
