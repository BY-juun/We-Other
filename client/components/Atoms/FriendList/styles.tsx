import styled from "@emotion/styled";

export const FriendListWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  border: 0.5px solid #c8c8c8;
  display: flex;
  gap: 15px;
  align-items: center;
  img {
    height: 100%;
    width: auto;
  }
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
