import React from "react";
import useGotoPage from "../../../Hooks/useGotoPage";
import { HeaderItems, HeaderTitle, HeaderWrapper } from "./styles";

const Header = () => {
	const gotoPage = useGotoPage();
	return (
		<HeaderWrapper>
			<div onClick={gotoPage("/")}>
				<HeaderTitle>WeOther</HeaderTitle>
			</div>
			<HeaderItems>
				<div onClick={gotoPage("/Posts")}>
					<span>게시판</span>
				</div>
				<div>
					<span>오늘의뭐시기</span>
				</div>
				<div>
					<span>마이페이지</span>
				</div>
			</HeaderItems>
		</HeaderWrapper>
	);
};

export default Header;
