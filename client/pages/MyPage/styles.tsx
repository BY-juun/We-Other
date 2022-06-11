import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "../../Utils/styles";

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
