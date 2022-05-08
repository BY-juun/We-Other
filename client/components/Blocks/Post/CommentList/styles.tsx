import styled from "@emotion/styled";

export const CommentListRoot = styled.div`
	border-bottom : 0.5px solid #C8C8C8;
	padding : 10px 5%;
	margin: 0 5%;
`

export const CommentListTop = styled.div`
	display : flex;
	align-items : center;
	justify-content : space-between;
	font-size : 13px;
	margin-bottom : 3px;
	& :first-child {
		display : flex;
		align-items : center;
		gap : 10px;
	}
`

export const UnHeartBtn = styled.button`
	border : none;
	background : none;
`

export const CommentContent = styled.div`
	font-size : 15px;
	margin-bottom : 3px;
`

export const CommentDate = styled.div`
	font-size : 13px;
	color: #c8c8c8;
`