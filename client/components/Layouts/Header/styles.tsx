import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const HeaderWrapper = styled.div`
  display: none;
  ${desktop} {
		z-index : 100;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    height: 80px;
    background: white;
    border-bottom: 1px solid #d6d6d6;
    padding: 0 10%;
  }
`;

export const HeaderTitle = styled.span`
  font-size: 25px;
  font-weight: 600;
  background: linear-gradient(to right top, #c16171, #fc96a5);
  color: transparent;
  -webkit-background-clip: text;
  cursor: pointer;
`;

export const HeaderItems = styled.div`
  display: flex;
  gap: 20px;
  div {
    cursor: pointer;
    height: 80px;
    display: flex;
    align-items: center;
    &:hover {
      border-bottom: 5px solid #fc96a5;
    }
  }
`;
