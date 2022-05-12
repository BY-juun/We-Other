import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  h1 {
    font-size: 50px;
  }
  ${mobile} {
		margin-top: 20%;
  }
  ${tablet} {
    margin-top: 30%;
  }
  ${tablet_landscape} {
    margin-top: 10%;
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

export const LinkCardWrapper = styled.div`
	width : 100%;
	display : flex;
	flex-direction : column;
	${desktop} {
		flex-direction : row;
		flex-flow : wrap;
		gap : 4%;
		margin-top : 3%;
	}

	${tablet_landscape} {
		flex-direction : row;
		flex-flow : wrap;
		gap : 4%;
		margin-top : 25px;
	}
`