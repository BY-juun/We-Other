import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";


export const LinkCardRoot = styled.div`
  width: 100%;
  position: relative;
  height: 100px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  text-align: start;
  padding: 3vh;
  overflow: hidden;
	${desktop} {
		width : 48%;
		height : 200px;
	}
	${tablet_landscape} {
		width : 48%;
		height : 150px;
	}
  div {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 15px;
  }

  img {
    position: absolute;
    width: 100px;
    height: 100px;
    right: 0;
    top: 20%;
    opacity: 0.5;
		${desktop} {
			width: 200px;
			height: 200px;
			opacity : 0.4;
		}
  }
`;
