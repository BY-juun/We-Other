import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const SliderImg = styled.img`
	width : 100%;
	height : auto;
`

export const SlideWrapper = styled.div`
	max-width: 100%;
	margin-top: 25px;
	margin-bottom: 50px;
	position : relative;
	button {	
		cursor : pointer;
	}
	${mobile} {
		width : 90%;
		margin : 0 auto;
		margin-top: 25px;
		margin-bottom: 50px;
	}
`

export const PrevBtn = styled.div`
	position : absolute;
	left: -7.5%;
  top: 45%;
`

export const NextBtn = styled.div`
	position : absolute;
	right: -7.5%;
  top: 45%;
`

export const ControlBtn = styled.button`
	background : #fc96a5;
	border : none;
	border-radius : 100%;
	display : flex;
	justify-content : center;
	align-items : center;
	width : 20px;
	height : 20px;
	img{
		width : 5px;
		height : 10px;
	}
`