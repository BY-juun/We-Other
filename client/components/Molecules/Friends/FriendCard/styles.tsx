import styled from "@emotion/styled";
import { mobile } from "Utils/styles";

export const FriendCardWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  border: 0.5px solid #c8c8c8;
  display: flex;
  gap: 15px;
  align-items: center;
  ${mobile} {
    gap: 10px;
  }
  img {
    height: 60px;
    width: auto;
    ${mobile} {
      height: 45px;
    }
  }
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ${mobile} {
    font-size: 12px;
  }
`;
