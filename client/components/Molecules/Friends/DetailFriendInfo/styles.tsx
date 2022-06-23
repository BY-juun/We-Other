import styled from "@emotion/styled";

export const DetailFriendInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-align: left;
    gap: 10px;
    span {
      height: 30px;
    }
    p {
      margin: 0;
      font-weight: 600;
      color: #fc96a5;
    }
  }
`;

export const DetailFriendInfoLeftBlock = styled.div`
  width: 25%;
  border-right: 2px solid #f5f5f5;
  span {
    font-weight: 600;
  }
`;

export const DetailFriendInfoRightBlock = styled.div`
  width: 65%;
  span {
    padding-left: 15px;
  }
`;
