import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "../../Utils/styles";

export const MyPageWrapper = styled.div`
  height: 100%;
  gap: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10%;
  ${mobile} {
    margin-top: 100px;
    grid-template-columns: 1fr;
  }

  ${tablet} {
    margin-top: 20%;
    grid-template-columns: 1fr;
  }
  ${tablet_landscape} {
    margin-top: 10%;
  }
  ${desktop} {
    flex-direction: row;
    margin-top: 10%;
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
  max-height: 510px;
`;
