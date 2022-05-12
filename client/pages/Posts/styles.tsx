import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const PostWrapper = styled.div`
`;

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
	${desktop} {
		flex-flow : wrap;
		padding : 5% 15%;
		gap : 4%;
	}
	${mobile} {
		margin-top : 10px;
		margin-bottom : 100px;
	}
`;

export const WritePostBtn = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 10%;
  right: 5%;
  border: none;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 7px #333d4b26;
  border: 0.5px solid #c8c8c8;
  padding-left: 12px;
  padding-bottom: 5px;
  cursor: pointer;
`;

export const SerachOpenBtn = styled.button`
	position: fixed;
	z-index: 100;
	top: 5%;
	right: 5%;
	border: none;
	border-radius: 100%;
	width: 60px;
	height: 60px;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 1px 7px #333d4b26;
	border: 0.5px solid #c8c8c8;
	padding-top : 5px;
	cursor: pointer;
	${desktop} {
		top: 2%;
	}
`

export const SearchInput = styled.input`
	position: fixed;
	z-index: 100;
	height : 40px;
	top: 6%;
	left: 5%;
	border: none;
	border-radius: 4px;
	width : 0;
	background: #f5f5f5;
	padding : 0;
	transition : width 0.35s ease;
	&:focus {
		outline : none;
		border : 1px solid rgb(252, 150, 165);
	}
	${desktop} {
		top: 3%;
		left : 15%;
	}
`

export const SearchBtn = styled.input`
	cursor : pointer;
	position: fixed;
	z-index: 100;
	opacity : 1;
	height : 40px;
	top: 6%;
	left: 60%;
	border: none;
	border-radius: 4px;
	width : 0;
	background: rgb(252, 150, 165);
	padding : 0;
	transition : width 0.35s ease;

	&::placeholder {
		color : white;
		text-align : center;
	}
	${desktop} {
		top: 3%;
		left : 67%;
	}
`