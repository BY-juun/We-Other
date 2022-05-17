import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";


export const SlidingBoxWrapper = styled.div`
	${desktop} {
		display : none;
	}
	cursor : grab;
	position : fixed;
	bottom : 0;
	height : 0;
	background : white;
	width : 100%;
	border-radius : 32px;
	z-index : 10;
	transition : height 0.4s ease;
`

export const OverLay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 200vh;
	position: absolute;
	top : 0;
	left : 0;
	cursor: pointer;
`

export const SlidingBoxTop = styled.div`
width : 100%;
display : flex;
justify-content : space-between;
align-items : center;
padding : 0 5%;
margin-top : 5%;
span {
	font-size : 25px;
	font-weight : 600;
	${mobile} {
		font-size : 20px;
	}
}
button { 
	background : none;
	border : none;
	cursor : pointer;
}
`