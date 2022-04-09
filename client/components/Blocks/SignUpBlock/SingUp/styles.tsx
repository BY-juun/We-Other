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
  margin-top: 25px;
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AccountTitle = styled.div`
  font-size: 12px;
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
