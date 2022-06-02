import styled from "@emotion/styled";

export const PartnerCardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 225px;
  background: #f5f5f5;
  border-radius: 4px;
  button {
    border: none;
    background: none;
    cursor: pointer;
    color: white;
    background: #fc96a5;
    border-radius: 4px;
    padding: 10px 15px;
    position: absolte;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      background: #c16171;
    }
  }
`;
