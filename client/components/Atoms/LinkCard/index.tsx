import React from "react";
import useGotoPage from "../../../Hooks/useGotoPage";
import { LinkCardRoot } from "./styles";

const LinkCard = ({ title, description, url }: { title: string, description: string, url: string }) => {
	const gotoPage = useGotoPage();
	return (
		<LinkCardRoot onClick={gotoPage(url)}>
			<div>{title}</div>
			<span>{description}</span>
			{/* <img src="/couple.png" /> */}
		</LinkCardRoot>
	);
};

export default LinkCard;
