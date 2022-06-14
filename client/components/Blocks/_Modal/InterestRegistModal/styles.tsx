import styled from "@emotion/styled";
import { customBtn } from "../../../../Utils/styles";

export const AdditionalInfoModalContent = styled.div`
	width : 100%;
	text-align : left;
	span {
		font-size : 15px;
	}
`

export const SubmitBtn = styled.button`
	margin-top : 10px;
	padding : 10px 0;
	width : 100%;
	${customBtn}
`

export const IntersetForm = styled.form`
	display : flex;
	gap : 2%;
	input {
		width : 75%;
	}
	button {
		width : 22%;
		${customBtn}
	}
`

export const InterestItem = styled.span`
	display : flex;
	align-items : center;
	flex-flow : wrap;
	gap : 5px;
	margin-top : 5px;
	span {
		background : #D095E9;
		color : white;
		border-radius : 4px;
		padding : 5px 10px;
	}
`