import styled from "@emotion/styled";
import { customBtn, mobile } from "../../../../Utils/styles";

export const MyInfoRoot = styled.div`
	width : 100%;
	display : flex;
	flex-direction : column;
	gap : 25px;
`

export const MyInfoItem = styled.div`
	width : 100%;
	display : flex;
	align-items : center;
	${mobile}{
		flex-direction : column;
		align-items : flex-start;
		gap : 3px;
	}
	span {
		margin-right : 10px;
	}
`

export const MyInfoBtn = styled.button`
	padding : 5px 20px;
	${customBtn}
`

export const MyInfoTitle = styled.div`
	width : 30%;
	font-size : 20px;
	font-weight : 600;
	${mobile} {
		width : 100%;
	}
`