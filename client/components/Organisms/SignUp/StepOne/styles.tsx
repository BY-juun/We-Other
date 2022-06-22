import styled from "@emotion/styled";
import { customBtn } from "../../../../Utils/styles";

export const InputBox = styled.div`
  display: flex;
  gap: 15px;
  button {
    width: 35%;
    ${customBtn}
  }
`;

export const ValidationMessage = styled.span`
  font-size: 13px;
  color: red;
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

export const AccountTitle = styled.div`
  font-size: 15px;
`;
