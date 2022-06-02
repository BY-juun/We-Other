import styled from "@emotion/styled";
import { desktop, mobile } from "Utils/styles";

export const PostWrapper = styled.div``;

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${desktop} {
    margin-top: 80px;
    flex-flow: wrap;
    padding: 0% 10%;
    gap: 0.5%;
  }
  ${mobile} {
    margin-bottom: 100px;
  }
`;


