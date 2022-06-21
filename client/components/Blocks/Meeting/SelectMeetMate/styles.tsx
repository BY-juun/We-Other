import styled from "@emotion/styled";
import { mobile } from "../../../../Utils/styles";

export const AddFriendItem = styled.div`
	display : flex;
	align-items : center;
	gap : 15px;
	${mobile} {
		gap : 7.5px;
	}
	input {
		width  : 20px;
		height : 20px;
		cursor : pointer;
		${mobile} {
			width  : 15px;
			height : 15px;
		}
	}
`