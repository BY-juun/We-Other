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
	${mobile} {
		height : 75px;
		padding : 10px 15px;
	}
  &:before {
    z-index: 2;
    content: "";
    height: 100%;
    position: absolute;
    background-image: url("/couple.png");
    background-repeat: no-repeat;
    background-size: 175px;
    background-position: 120% 65px;
    opacity: 0.2;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    ${tablet_landscape} {
      background-position: 120% 15px;
    }
    ${tablet} {
      background-size: 125px;
      background-position: 105% 0px;
    }
    ${mobile} {
      background-size: 125px;
      background-position: 105% 0px;
    }
  }
  &:hover {
    &:before {
      transition-duration: 0.5s;
      background-position: 105% 65px;
      background-color: #f9f9f9;
      ${tablet_landscape} {
        background-position: 95% 15px;
      }
      ${tablet} {
        background-size: 125px;
        background-position: 100% 0px;
      }
      ${mobile} {
        background-size: 125px;
        background-position: 95% 0px;
      }
    }
  }
  ${desktop} {
    width: 48%;
    height: 200px;
  }
  ${tablet_landscape} {
    width: 48%;
    height: 150px;
  }
  div {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 5px;
  }
	span {
		font-size : 13px;
		opacity : 0.5;
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
      opacity: 0.4;
    }
  }
`;
