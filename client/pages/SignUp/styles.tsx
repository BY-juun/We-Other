import styled from "@emotion/styled";
import { mobile, tablet, tablet_landscape } from "Utils/styles";

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  ${mobile} {
    margin-top: 40%;
  }
  ${tablet} {
    margin-top: 40%;
  }
  ${tablet_landscape} {
    margin-top: 15%;
  }
`;

export const SignUpTitle = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;
