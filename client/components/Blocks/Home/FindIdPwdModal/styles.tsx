import styled from "@emotion/styled";

export const SelectBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2%;
  button {
    width: 49%;
    padding: 10px 0;
    border-radius: 4px;
  }
`;

export const FindContentWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  div {
    text-align: left;
    span {
      font-size: 15px;
    }
    button {
      margin-top: 15px;
      color: white;
      background: rgb(252, 150, 165);
      width: 100%;
      padding: 10px 0;
      border-radius: 4px;
      &:hover {
        color: white;
        background: #c16171;
      }
    }
  }
`;
