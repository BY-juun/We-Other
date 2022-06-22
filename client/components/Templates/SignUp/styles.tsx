import styled from "@emotion/styled";
import { mobile, tablet, tablet_landscape } from "Utils/styles";

export const SignUpContainer = styled.div`
  ${mobile} {
    width: 100%;
  }
  ${tablet} {
    width: 80%;
  }
  ${tablet_landscape} {
    width: 50%;
  }
  margin-top: 0;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Stepper = styled.div`
  display: flex;
  width: 100%;
  height: 5px;
  background: #e5e5e5;
  margin-bottom: 25px;
  div {
    width: 50%;
  }
`;
