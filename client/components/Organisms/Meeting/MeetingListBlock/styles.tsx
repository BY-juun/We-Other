import styled from "@emotion/styled";
import { mobile, tablet } from "../../../../Utils/styles";

export const MeetingListBlockWrapper = styled.div`
	display : grid;
	grid-template-columns : 1fr 1fr 1fr;
	gap : 15px;
	margin-top : 15px;
	${tablet} {
		grid-template-columns : 1fr 1fr;
		gap : 10px;
	}
	${mobile} {
		grid-template-columns : 1fr;
	}
`