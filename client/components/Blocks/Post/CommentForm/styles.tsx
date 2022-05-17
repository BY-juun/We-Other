import styled from "@emotion/styled";

export const CommentFormRoot = styled.div`

  padding: 10px 0;
  width: 100%;

	padding : 0 10%;
	margin-top : 15px;
	margin-bottom : 15px;
	form {
		width : 100%;
		display: flex;
		align-items: center;
		gap: 5%;
	}
  input {
    width: 75%;
    padding: 10px;
    background: #f5f5f5;
    outline: none;
    border: none;
    border-radius: 4px;
  }
  button {
    width: 20%;
    border-radius: 4px;
    padding: 10px 15px;
    border: none;
    background: #f5f5f5;
    cursor: pointer;
  }
`;
