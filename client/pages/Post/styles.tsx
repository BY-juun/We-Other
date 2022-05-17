import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";


export const PostWrapper = styled.div`
	margin-top: 10px;
	margin-bottom : 150px;
`

export const CommentListWrapper = styled.div`
		width: 90%;
		margin: 0 auto;
		border-top : 0.5px solid #C8C8C8;
`

export const CommentWrapper = styled.div`
${desktop} {
	margin-top : 350px;
}	
`

export const GoBackBtn = styled.button`
	margin-left : 9%;
	border : none;
	background : none;
	display : flex;
	align-items :center;
	gap : 5px;
`