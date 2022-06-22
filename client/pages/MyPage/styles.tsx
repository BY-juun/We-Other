import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const MyPageWrapper = styled.div`
  padding: 0 10%;
  display: flex;
  align-items: center;
  gap: 2%;
  margin-top: 25px;
  ${mobile} {
    padding: 0 5%;
    flex-flow: wrap;
  }
  ${tablet} {
    flex-flow: wrap;
  }
`;
