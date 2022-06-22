import styled from "@emotion/styled";
import { customBtn, mobile, tablet, tablet_landscape } from "Utils/styles";
export const EtcWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c8c8c8;
  margin-top: 15px;
  font-size: 15px;
  gap: 25px;
  margin-bottom: 25px;
  ${mobile} {
    margin-top: 15px;
    margin-bottom: 25px;
  }
  button {
    border: none;
    color: black;
    background: none;
    cursor: pointer;
    &:hover {
      color: #fc96a5;
    }
  }
`;
