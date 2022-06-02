import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const Wrapper = styled.div`
	margin-top : 80px;
	${mobile} {
		margin-top : 60px;
	}
`

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
  }
  ${mobile} {
    margin-top: 15%;
  }
  ${tablet} {
    margin-top: 30%;
  }
  ${tablet_landscape} {
    margin-top: 10%;
  }
  ${desktop} {
    flex-direction: row;
    margin-top: 12.5%;
  }
`;

export const HomeDescription = styled.div`
  font-size: 15px;
  font-weight: 500;
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

export const Title = styled.span`
  background: linear-gradient(to right top, #c16171, #fc96a5);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 35px;
  font-weight: 600;
  ${desktop} {
    font-size: 50px;
    font-weight: 700;
  }
`;
