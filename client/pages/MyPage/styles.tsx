import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "../../Utils/styles";

export const MyPageWrapper = styled.div`
	height : 100%;
	gap : 5%;
	${mobile} {
		margin-top: 100px;
	}
	padding : 0 10%;
  ${tablet} {
    margin-top: 20%;
  }
  ${tablet_landscape} {
    margin-top: 10%;
  }
  ${desktop} {
    flex-direction: row;
    margin-top: 12.5%;
  }
`

export const MypageItem = styled.div`
	height : 100%;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
	border: 0.5px solid #c8c8c8;
	padding : 20px;
	width : 50%;
	margin : 0 auto;
	${tablet} {
		width : 100%;
	}
	${mobile} {
		width : 100%;
	}
`