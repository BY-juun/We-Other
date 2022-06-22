import styled from "@emotion/styled";
import { desktop } from "Utils/styles";

export const Title = styled.span`
  background: linear-gradient(to right top, #c16171, #fc96a5);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 35px;
  font-weight: 600;
  ${desktop} {
    font-size: 50px;
    font-weight: 700;
  }
`;
