import styled from "@emotion/styled";

export const MyFriendWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
`;

export const FriendListRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 75%;
  overflow: auto;
`;
