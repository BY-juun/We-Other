import styled from "@emotion/styled";

export const NoItemWrapper = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 15px;
    span {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      opacity: 0.3;
    }
  }
`;
