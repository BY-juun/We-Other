import Image from "next/image";
import React, { useCallback, useState } from "react";
import useGotoPage from "../../../Hooks/useGotoPage";
import MobileMenuBar from "../MobileMenuBar";
import { DesktopItems, HeaderTitle, HeaderWrapper, MobileMenu } from "./styles";

const Header = () => {
	const gotoPage = useGotoPage();
	const [openDrawer, setOpenDrawer] = useState(false);
	const onClickMenuBtn = useCallback(() => {
		setOpenDrawer(true)
	}, [])
	const closeMenu = useCallback(() => {
		setOpenDrawer(false);
	}, [])
	return (
		<HeaderWrapper>
			<div onClick={gotoPage("/")}>
				<HeaderTitle>WeOther</HeaderTitle>
			</div>
			<DesktopItems>
				{menus.map((menu) => {
					return <div key={menu.text}>{menu.text}</div>
				})}
			</DesktopItems>
			<MobileMenu>
				<button onClick={onClickMenuBtn}>
					<Image src="/menu.png" alt="menu" width={15} height={15} />
				</button>
				<MobileMenuBar open={openDrawer} onClose={closeMenu} />
			</MobileMenu >
		</HeaderWrapper >
	);
};

const menus = [
	{ text: "마이 페이지", url: "/mypage" },
	{ text: "오늘의 뭐시기", url: "/" }
]

export default Header;
