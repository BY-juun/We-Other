import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const PostWrapper = styled.div``;

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${desktop} {
    margin-top: 80px;
    flex-flow: wrap;
    padding: 0% 10%;
    gap: 0.5%;
  }
  ${mobile} {
    margin-bottom: 100px;
  }
`;

export const WritePostBtn = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 10%;
  right: 5%;
  border: none;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 7px #333d4b26;
  border: 0.5px solid #c8c8c8;
  padding-left: 12px;
  padding-bottom: 5px;
  cursor: pointer;
`;

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
