import styled from "@emotion/styled";
import { mobile, tablet, tablet_landscape } from "Utils/styles";

export const SignUpContainer = styled.div`
  ${mobile} {
    width: 100%;
  }
  ${tablet} {
    width: 50%;
  }
  ${tablet_landscape} {
    width: 35%;
  }
  margin-top: 0;
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AccountTitle = styled.div`
  font-size: 15px;
`;

export const SelectSex = styled.div`
  display: flex;
  align-items: center;
  gap: 4%;
  margin-top: 5px;
  button {
    cursor: pointer;
    width: 48%;
    border: none;
    padding: 12px 0;
  }
`;

export const SignUpBtn = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  width: 100%;
  color: white;
  background: #fc96a5;
  padding: 10px;
`;


export const Stepper = styled.div`
	display : flex;
	width : 100%;
	height : 5px;
	background : #E5E5E5;
	margin-bottom : 25px;
	div {
		width : 50%;
	}
`

export const Active = styled.div`
	background : #fc96a5;
`