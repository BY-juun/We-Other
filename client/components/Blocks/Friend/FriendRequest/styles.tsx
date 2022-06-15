import styled from "@emotion/styled";
import { mobile } from "../../../../Utils/styles";

export const RequestListItem = styled.div`
	height : 50%;
`
export const ListWrapper = styled.div`
	height : 80%;
	margin-top : 3%;
	overflow : auto;
	overflow-x : hidden;
	display :flex;
	flex-direction : column;
	gap : 5px;
`

export const RequestCard = styled.div`
	display : flex;
	gap : 5px;
	button {
		cursor : pointer;
		border : none;
		background : none;
		img {
			width : 25px;
			height : 25px;
			${mobile}{
				width : 20px;
				height : 20px;
			}
		}
	}
`

export const BtnSet = styled.div`
	display : flex;
	flex-direction : column;
	gap : 3px;
	justify-content : center;
`