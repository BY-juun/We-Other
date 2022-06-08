import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const PostContentWrapper = styled.div`
	padding : 0 10%;
	${desktop} {
		padding: 0 25%;
	}
	${mobile} {
		padding : 0 5%;
	}
`

export const PostContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
	font-size : 13px;
`;

export const PostId = styled.span`
  color: #6f94ff;
  margin-right: 10px;
`;

export const PostDate = styled.span`
  color: #929292;
`;

export const PostTitleArea = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
`;

export const PostContentArea = styled.div`
  margin-bottom: 15px;
`;

export const DeleteBtn = styled.button`
	border : none;
	background : #fc96a5;
	cursor : pointer;
	color : white;
	border-radius : 4px;
	padding : 5px 10px;
`

export const ReportBtn = styled.button`
  border: none;
  cursor: pointer;
	background : none;
`;
