import styled from "@emotion/styled";
import { customBtn } from "../../../../Utils/styles";

export const InputBox = styled.div`
	display :flex;
	gap : 15px;
	button {
		width : 35%;
		${customBtn}
	}
`

export const ValidationMessage = styled.span`
	font-size : 13px;
	color : red;
`