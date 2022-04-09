import styled from "@emotion/styled";
import { mobile, tablet, tablet_landscape } from "Utils/styles";

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  ${mobile} {
    margin-top: 60%;
  }
  ${tablet} {
    margin-top: 50%;
  }
  ${tablet_landscape} {
    margin-top: 20%;
  }
`;

export const SignUpTitle = styled.div`
  font-size: 25px;
`;
