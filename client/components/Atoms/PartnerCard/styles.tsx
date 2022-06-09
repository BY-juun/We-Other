import styled from "@emotion/styled";

export const PartnerCardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 225px;
  background: #fff 0 0 no-repeat padding-box;
  color: #000 !important;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  button {
    font-weight: 700;
    border: none;
    background: none;
    cursor: pointer;
    color: #fc96a5;
    border-radius: 4px;
    padding: 10px 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      color: #c16171;
    }
  }
`;
