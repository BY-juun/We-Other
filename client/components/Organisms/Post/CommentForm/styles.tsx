import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const CommentFormRoot = styled.div`

  padding: 10px 0;
  width: 90%;
	margin : 0 auto;
	margin-top : 15px;
	${desktop} {
		width : 50%;
	}
	form {
		display: flex;
		align-items: center;
		gap: 5%;
		padding: 10px 0;
		border-bottom: 0.5px solid #C8C8C8;
	}
  input {
    width: 75%;
    padding: 10px;
    background: #f5f5f5;
    outline: none;
    border: none;
    border-radius: 4px;
		${mobile} {
			width : 70%;
		}
  }
  button {
    width: 20%;
    border-radius: 4px;
    padding: 10px 15px;
    border: none;
    background: #fc96a5;
		color : white;
    cursor: pointer;
		${mobile} {
			width : 25%;
		}
  }
`;
