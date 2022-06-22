import styled from "@emotion/styled";
import { desktop } from "Utils/styles";

export const SerachOpenBtn = styled.button`
  position: fixed;
  z-index: 100;
  top: 5%;
  right: 5%;
  border: none;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 7px #333d4b26;
  border: 0.5px solid #c8c8c8;
  padding-top: 5px;
  cursor: pointer;
  ${desktop} {
    top: 10%;
  }
`;