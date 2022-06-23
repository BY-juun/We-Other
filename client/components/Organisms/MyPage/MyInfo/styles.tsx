import styled from "@emotion/styled";
import { customBtn, mobile, tablet_landscape } from "Utils/styles";

export const MyInfoRoot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MyInfoLeftBlock = styled.div`
  width: 25%;
  ${mobile} {
    width: 45%;
  }
  ${tablet_landscape} {
    width: 40%;
  }
  border-right: 2px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: left;
  gap: 25px;
  p {
    margin: 0;
    height: 30px;
    font-weight: 600;
    ${mobile} {
      font-size: 15px;
    }
  }
`;

export const MyInfoBtnWrapper = styled.div`
  padding-left: 25px;
  width: 100%;
  ${mobile} {
    height: 30px;
  }
`;

export const MyInfoRightBlock = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: left;
  gap: 25px;
  overflow: hidden;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    height: 30px;
    padding-left: 25px;
    ${mobile} {
      font-size: 15px;
    }
  }
`;
