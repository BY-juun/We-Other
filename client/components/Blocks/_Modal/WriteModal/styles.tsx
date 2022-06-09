import styled from "@emotion/styled";
import { customBtn } from "../../../../Utils/styles";

export const PostFormWrapper = styled.div`
  margin-top: 25px;
	text-align : left;
`;

export const PostFormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageAddBtn = styled.button`
  background: white;
  border: none;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
	padding: 10px 25px;
	${customBtn}
`;

export const ImageWrapper = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    img {
      max-width: 100px;
      max-height: 100px;
    }
    button {
      cursor: pointer;
      margin-left: 10px;
      border: none;
      background: #6b6869;
      padding: 5px 10px;
      border-radius: 4px;
      color: white;
    }
  }
`;
