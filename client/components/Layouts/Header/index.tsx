import MessageModal from "components/Blocks/_Modal/MessageModal";
import useModal from "Hooks/useModal";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import GotoFriendListBtn from "../../Atoms/GotoFriendListBtn";
import MobileMenuBar from "../MobileMenuBar";
import { DesktopItems, HeaderTitle, HeaderWrapper, MessageItem, MobileMenu, OtherItem } from "./styles";

const Header = () => {
	const { push } = useRouter();
	const [openDrawer, , open, close] = useModal();
	const [message, , openMessage, closeMessage] = useModal();

	const gotoPage = useCallback((url: string) => () => {
		if (!Cookies.get('userIdx')) return alert("* 로그인 후 이용가능합니다");
		push(url);
	}, [])

	return (
		<>
			<HeaderWrapper>
				<div onClick={gotoPage("/")}>
					<HeaderTitle>WeOther</HeaderTitle>
				</div>
				<DesktopItems>
					<OtherItem onClick={gotoPage('/MyPage')}>
						마이페이지
					</OtherItem>
					<GotoFriendListBtn onClick={gotoPage('/Friends')} />
					<OtherItem onClick={gotoPage('/MyPage')}>
						채팅
					</OtherItem>
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
