import styled from "@emotion/styled";
import { mobile, tablet } from "Utils/styles";

export const RegisterPageWrapper = styled.div`
  padding: 1% 10%;
  padding-bottom: 5%;
`;

export const RegisterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    border: none;
    cursor: pointer;
    color: white;
    background: #fc96a5;
    border-radius: 4px;
    padding: 10px 25px;
    &:hover {
      background: #c16171;
    }
  }
`;

export const RegisterFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  div {
    margin-top: 25px;
    textarea {
      margin-top: 15px;
    }
  }
  span {
    font-size: 18px;
  }
  input {
    width: 50%;
    ${mobile} {
      width: 100%;
    }
    ${tablet} {
      width: 75%;
    }
  }
  select {
    padding: 13px 20px;
    background: #f5f5f5;
    border: none;
    cursor: pointer;
    width: 50%;
    ${mobile} {
      width: 100%;
    }
    ${tablet} {
      width: 75%;
    }
    &:focus {
      outline: none;
      border: 1px solid #fc96a5;
    }
  }
  textarea {
    width: 50%;
    min-height: 100px;
    ${mobile} {
      width: 100%;
    }
    ${tablet} {
      width: 75%;
    }
  }
`;
