import styled from "@emotion/styled";
import { customBtn } from "Utils/styles";

export const ModalContent = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4%;
  input {
    width: 76%;
  }
  button {
    width: 20%;
    height: 43px;
    ${customBtn}
  }
`;

export const ModalDescription = styled.div`
  text-align: left;
  font-size: 13px;
  margin-bottom: 5px;
`;
