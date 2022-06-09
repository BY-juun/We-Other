import styled from "@emotion/styled";
import { mobile } from "Utils/styles";

export const ResetWrapper = styled.div`
  margin-top: 10%;
  ${mobile} {
    margin-top: 25%;
  }
  h1 {
    ${mobile} {
      font-size: 20px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      input {
        width: 50%;
        ${mobile} {
          width: 100%;
        }
      }
    }
    button {
      cursor: pointer;
      border: none;
      background: none;
      color: white;
      background: #fc96a5;
      padding: 10px 0;
      width: 50%;
      ${mobile} {
        width: 100%;
      }
      &:hover {
        background: #c16171;
      }
    }
  }
`;
