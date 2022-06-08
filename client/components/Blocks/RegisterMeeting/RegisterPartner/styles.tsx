import styled from "@emotion/styled";
import { mobile, tablet } from "Utils/styles";

export const RegisterPartnerWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  span {
    font-size: 18px;
  }
`;

export const PartnerCardWrapper = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  ${mobile} {
    grid-template-columns: 1fr;
  }
  ${tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
