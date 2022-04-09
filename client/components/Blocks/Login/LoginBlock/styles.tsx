import styled from "@emotion/styled";
import { mobile, tablet, tablet_landscape } from "Utils/styles";

export const LoginWrapper = styled.div`
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

export const LoginBtn = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  width: 100%;
  color: white;
  background: #fc96a5;
  padding: 10px;
`;

export const EtcWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c8c8c8;
  font-size: 15px;
  gap: 25px;
  div {
    cursor: pointer;
    &:hover {
      color: #fc96a5;
    }
  }
`;
