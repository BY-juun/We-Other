import styled from "@emotion/styled";
import { customBtn } from "../../../../Utils/styles";

export const AdditionalInfoModalContent = styled.div`
	width : 100%;
	text-align : left;
	span {
		font-size : 15px;
	}
`

export const MBTISelector = styled.div`
	width : 100%;
	display : flex;
	gap : 1%;
	select {
		width : 24%;
		height : 100%;
		background : #f5f5f5;
		border : none;
		cursor : pointer;
		padding: 13px 20px;
		font-size : 13px;
		border-radius : 4px;
		&:focus {
			outline: none;
			border: 1px solid #fc96a5;
		}
	}
`


export const SubmitBtn = styled.button`
	margin-top : 10px;
	padding : 10px 0;
	width : 100%;
	${customBtn}
`