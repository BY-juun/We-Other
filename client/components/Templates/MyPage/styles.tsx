import styled from "@emotion/styled";
import { mobile, tablet } from "Utils/styles";

export const MyPageTemplateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2%;
  ${tablet} {
    grid-template-columns: 1fr;
  }
  ${mobile} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MypageItem = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  border: 0.5px solid #c8c8c8;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 25px;
  h2 {
    margin-top: 0;
  }
`;
