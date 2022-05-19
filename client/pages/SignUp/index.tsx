import SignUpBlock from "components/Blocks/SingUp/SignUpBlock";
import { ContentWrapper } from "components/Layouts/Content/styles";
import Cookies from "js-cookie";
import { NextPage } from "next";;
import React from "react";
import useGotoPage from "../../Hooks/useGotoPage";
import { SignUpTitle, SignUpWrapper } from "./styles";

const SignUp: NextPage = () => {
	const gotoPage = useGotoPage();
	if (Cookies.get("userIdx")) gotoPage('/');

	return (
		<>
			<ContentWrapper>
				<SignUpWrapper>
					<SignUpTitle>회원가입</SignUpTitle>
					<SignUpBlock />
				</SignUpWrapper>
			</ContentWrapper>
		</>
	);
};

export default SignUp;
