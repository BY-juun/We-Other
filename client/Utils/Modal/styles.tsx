import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const ModalRoot = styled.div`
	z-index: 101;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	font-size: 25px;
`

export const OverLay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100%;
	position: absolute;
	cursor: pointer;
`

export const ModalContent = styled.div`
	width: 90%;
	z-index: 2;
	padding: 30px 20px;
	background-color: white;
	text-align: center;
	color: black;
	border-radius: 6px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
	${desktop} {
		width: 30%;
	}
	${tablet} {
		width: 50%;
	}
	${tablet_landscape} {
		width: 40%;
	}
`


export const CommentFormTitle = styled.div`
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	span{
		font-size : 20px;
	}
	button {
		cursor: pointer;
		border: none;
		background: none;
	}
`