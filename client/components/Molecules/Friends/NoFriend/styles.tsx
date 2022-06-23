import styled from "@emotion/styled";
import { customBtn } from "Utils/styles";

export const NoFriendWrapper = styled.div`
  width: 100%;
  height: 100%;
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
      font-size: 25px;
      font-weight: 600;
      opacity: 0.3;
    }
    button {
      padding: 10px 15px;
      ${customBtn}
    }
  }
`;
