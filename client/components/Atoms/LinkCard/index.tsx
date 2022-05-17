import React from "react";
import { LinkCardRoot } from "./styles";

const LinkCard = ({ title, description }: { title: string, description: string }) => {
	return (
		<LinkCardRoot>
			<div>{title}</div>
			<span>{description}</span>
			{/* <img src="/couple.png" /> */}
		</LinkCardRoot>
	);
};

export default LinkCard;
