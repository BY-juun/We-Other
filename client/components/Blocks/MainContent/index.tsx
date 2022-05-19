import LinkCard from "components/Atoms/LinkCard";
import React from "react";
import useLogout from "../../../Hooks/useLogout";
import { LogOutBtn, MainContentWrapper } from "./styles";

const MainContent = ({ userName }: { userName: string | undefined }) => {
	const logout = useLogout();
	return (
		<MainContentWrapper>
			<div>안녕하세요 {userName}님</div>
			<LogOutBtn onClick={logout}>로그아웃</LogOutBtn>

		</MainContentWrapper>
	);
};


export default MainContent;
