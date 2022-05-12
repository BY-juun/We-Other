import styled from "@emotion/styled";

export const LinkCardRoot = styled.div`
  width: 100%;
  position: relative;
  height: 100px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  text-align: start;
  padding: 3vh;
  overflow: hidden;

  div {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 15px;
  }

  img {
    position: absolute;
    width: 100px;
    height: 100px;
    right: 0;
    top: 20%;
    opacity: 0.5;
  }
`;
