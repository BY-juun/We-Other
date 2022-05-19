import styled from "@emotion/styled";

export const CommentOfCommentRoot = styled.div`
	margin-top : 5px;
	display : flex;
	padding-left : 7.5%;	
`

export const DownArrowImg = styled.img`
	width : 15px;
	height : 15px;
	margin-right : 5px;
	margin-top : 7px;
`

export const CommentBox = styled.div`
	background : #f5f5f5;
	border-radius : 4px; 
	width : 100%;
	padding : 10px 20px;
	span{
		font-size : 15px;
		font-weight : 600;
	}
`

export const UserArea = styled.div`
	display : flex;
	align-items : center;
	gap : 3px;
	margin-bottom : 5px;
`

export const CommentContent = styled.div`
word-break:break-all;
`