import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";
export const FriendRefreshBtnWrapper = styled.button`
  position: fixed;
  z-index: 100;

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
    top: 12.5%;
    right: 3.5%;
  }
  ${tablet_landscape} {
    top: 12.5%;
    right: 2.5%;
  }
  ${tablet} {
    top: 7.5%;
    right: 1%;
  }
  ${mobile} {
    bottom: 3%;
    right: 2.5%;
  }
  &:hover {
    box-shadow: 0 0px 4px 4px #fc96a5;
  }
`;
