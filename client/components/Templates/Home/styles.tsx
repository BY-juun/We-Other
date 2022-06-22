import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const Wrapper = styled.div`
  padding-top: 80px;
  ${mobile} {
    padding-top: 60px;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
  }
  ${mobile} {
    margin-top: 10%;
  }
  ${tablet} {
    margin-top: 30%;
  }
  ${tablet_landscape} {
    margin-top: 10%;
  }
  ${desktop} {
    flex-direction: row;
    margin-top: 5%;
  }
`;

export const HomeLeft = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${desktop} {
    width: 49%;
  }
`;

export const LinkCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${desktop} {
    flex-direction: row;
    flex-flow: wrap;
    gap: 4%;
    margin-top: 3%;
    width: 49%;
  }

  ${tablet_landscape} {
    flex-direction: row;
    flex-flow: wrap;
    gap: 4%;
    margin-top: 25px;
  }
`;
