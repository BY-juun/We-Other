import styled from "@emotion/styled";
import { mobile, tablet, tablet_landscape } from "Utils/styles";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  h1 {
    font-size: 50px;
  }
  ${mobile} {
    margin-top: 30%;
  }
  ${tablet} {
    margin-top: 50%;
  }
  ${tablet_landscape} {
    margin-top: 20%;
  }
`;

export const HomeDescription = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
