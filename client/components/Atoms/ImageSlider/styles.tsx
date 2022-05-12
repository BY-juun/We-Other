import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const SliderImg = styled.img`
	width : 100%;	
	min-width : 400px;
	height : 200px;
	${desktop} {
		height : 400px;
	}
`

export const SlideWrapper = styled.div`
	max-width: 100%;
	max-height : 200px;
	margin-top: 25px;
	margin-bottom: 50px;

	button {
		cursor : pointer;
	}
`

export const ControlBtn = styled.div`
	background : #fc96a5;
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