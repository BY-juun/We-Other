import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";


export const PostWrapper = styled.div`
	margin-top: 10px;
	margin-bottom : 150px;
	${desktop} {
		margin-top : 100px;
	}
	${mobile} {
		margin-top : 75px;
	}
`

export const CommentListWrapper = styled.div`
		width: 90%;
		margin: 0 auto;
		${desktop} {
			width : 50%;
		}
`

export const CommentWrapper = styled.div`
`

export const GoBackBtn = styled.button`
	margin-left : 9%;
	border : none;
	background : none;
	display : flex;
	align-items :center;
	gap : 5px;
`