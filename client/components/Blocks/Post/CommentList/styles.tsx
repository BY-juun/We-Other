import styled from "@emotion/styled";

export const CommentListRoot = styled.div`
  border-bottom: 0.5px solid #c8c8c8;
  padding: 10px 5%;
`;

export const CommentListTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 7.5px;
  font-weight: 600;
`;

export const UnknownUserImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const CommentRight = styled.div`
  display: flex;
  align-items: center;
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const CommentContent = styled.div`
  font-size: 15px;
  margin-bottom: 3px;
  word-break: break-all;
`;

export const CommentDate = styled.div`
  font-size: 13px;
  color: #c8c8c8;
`;
