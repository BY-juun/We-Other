import styled from "@emotion/styled";

export const TopLayOutWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background: #fc96a5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`;

export const TopLayOutRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const TopLayOutItems = styled.div`
  cursor: pointer;
  padding: 20px;
  border-radius: 4px;
  &:hover {
    background: #c16171;
  }
`;
