import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  min-height: 50px;
  background: white;
`;

export const FooterContent = styled.div`
  width: 33.3%;
  text-align: center;
  color: black;
  font-size: 15px;
  padding: 10px 0;
  svg {
    width: 25px;
    height: 25px;
  }
`;
