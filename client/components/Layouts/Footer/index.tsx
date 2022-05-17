import React, { useCallback, useEffect, useState } from "react";
import { FooterContent, FooterWrapper } from "./styles";
import { CgClipboard } from "react-icons/cg";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/router";
import useGotoPage from "../../../Utils/Hooks/useGotoPage";

const Footer = () => {
	const router = useRouter();
	const gotoPage = useGotoPage();
	const [path, setPath] = useState("");

	useEffect(() => {
		setPath(router.pathname);
	}, [router]);

	return (
		<FooterWrapper>
			<FooterContent style={{ color: path === "/Posts" ? "#fc96a5" : "black" }} onClick={gotoPage("/Posts")}>
				<CgClipboard />
				<div>게시판</div>
			</FooterContent>
			<FooterContent style={{ color: path === "/" ? "#fc96a5" : "black" }} onClick={gotoPage('/')}>
				<AiOutlineHome />
				<div>홈</div>
			</FooterContent>
			<FooterContent style={{ color: path === "/MyPage" ? "#fc96a5" : "black" }}>
				<AiOutlineUser />
				<div>마이페이지</div>
			</FooterContent>
		</FooterWrapper>
	);
};

export default Footer;
