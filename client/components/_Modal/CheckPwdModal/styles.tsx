import styled from "@emotion/styled";
import { customBtn } from "../../../Utils/styles";

export const CheckPwdModalContent = styled.div`
  text-align: left;
  span {
    font-size: 15px;
  }
  input {
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
    width: 100%;
    padding: 10px 0;
    ${customBtn}
  }
`;
