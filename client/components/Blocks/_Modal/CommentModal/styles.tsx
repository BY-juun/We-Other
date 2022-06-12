import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";


export const CommnetWriteForm = styled.form`
	display : flex;
	gap : 5%;
	align-items : center;	
	input {
		width : 70%;
	}
	button {
		border: none;
    font-size: 15px;
    border-radius: 4px;
		width : 25%;
		background : #fc96a5;
		color : white;
		height : 100%;
		padding : 12px 0;
	}
`