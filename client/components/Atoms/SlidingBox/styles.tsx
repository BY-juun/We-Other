import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";


export const SlidingBoxWrapper = styled.div`
	${desktop} {
		width : 50%;
		margin : 0 auto;
		left : 25%;
	}
	cursor : grab;
	position : fixed;
	bottom : -5%;
	height : 0;
	background : white;
	width : 100%;
	border-radius : 32px;
	z-index : 102;
	transition : height 0.4s ease;
`

export const OverLay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 200vh;
	z-index : 101;
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

export const SlidingBoxContent = styled.div`
width : 100%;
display : flex;
flex-direction : column;
gap : 15px;
padding : 0 5%;
margin-top : 10%;
div {
	display : flex;
	justify-content :space-between;
	align-items :center;
}
span {
	font-size : 15px;
	font-weight : 600;
	${mobile} {
		font-size : 13px;
	}
}
textarea {
	height : 500px;
	padding: 10px;
	background: #f5f5f5;
	border : none;
	outline : none;
	font-size : 15px;
	&:focus {
		border : 1px solid #fc96a5;
	}
}
button { 
	border-radius: 4px;
	padding: 10px 20px;
	border: none;
	background: #fc96a5;
	cursor : pointer;
	color : white;
}
`