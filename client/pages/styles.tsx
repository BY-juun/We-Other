import styled from "@emotion/styled";
import { mobile, tablet, tablet_landscape } from "Utils/styles";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  h1 {
    font-size: 50px;
  }
  ${mobile} {
  }
  ${tablet} {
    margin-top: 50%;
  }
  ${tablet_landscape} {
    margin-top: 20%;
  }

  span {
    font-size: 40px;
    font-weight: 600;
  }
`;

export const HomeDescription = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
