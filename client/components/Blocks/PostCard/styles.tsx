import styled from "@emotion/styled";
import { desktop, mobile, tablet, tablet_landscape } from "Utils/styles";

export const PostCardRoot = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 7px #333d4b26;
  border: 0.5px solid #c8c8c8;
  padding: 15px 20px;
  box-sizing: border-box;
  font-size: 12px;
  cursor: pointer;
  height: 105px;
  display: flex;
  justify-content: space-between;
  &:hover {
    color: #fc96a5;
  }
  ${desktop} {
		border-left : none;
		border-right : none;
		border-top : none;
		box-shadow : none;
		height : fit-content;
		min-height : 59px;
  }
	${tablet_landscape} {
		border-left : none;
		border-right : none;
		border-top : none;
		box-shadow : none;
		height : fit-content;
		min-height : 59px;
  }
  ${mobile} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const PostLeft = styled.div`
	width : 60%;
	overflow : hidden;
	${desktop} {
		display : flex;
		align-items : center;
		width : 100%;
	}
	${tablet_landscape} {
		display : flex;
		align-items : center;
		width : 100%;
	}
	${tablet} {
		width : 80%;
	}
`

export const PostWriter = styled.div`
  margin-bottom: 5px;
`;

export const PostTitle = styled.div`
  font-size: 17px;
  height: 23px;
	overflow : hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
  width: 100%;
	${desktop} {
		font-size : 15px;
		width : 22.5%;
	}
	${tablet_landscape} {
		font-size : 15px;
		width : 22.5%;
	}
`;

export const PostContent = styled.div`
  font-size: 13px;
  line-height: 25px;
  margin-bottom: 7.5px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #929292;
  width: 100%;
	${desktop} {
		width : 57.5%;
	}
	${tablet_landscape} {
		width : 57.5%;
	}
`;

export const PostDate = styled.div`
  color: #c8c8c8;
	${desktop} {
		width : 60%;
	}
	${tablet_landscape} {
		width : 60%;
	}
`;

export const EtcArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
	${desktop}  {
		margin-left : 2%;
		width : 18%;
	}
	${tablet_landscape}  {
		margin-left : 2%;
		width : 18%;
	}
`;
export const EtcItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 3px;
  span {
    font-size: 12px;
  }
	${desktop} {
		width : 100%;
	}
	${tablet_landscape} {
		width : 100%;
	}
`;

export const CountArea = styled.div`
	${desktop} {
		width : 20%;
		text-align : right;
		display : flex;
		gap : 5px;
	}
	${tablet_landscape} {
		width : 20%;
		text-align : right;
		display : flex;
		gap : 5px;
	}
`


export const ThumbNail = styled.div`
	width : 40%;
	img {
		width  : 100%;
		height : 100%;
	}
	${desktop} {
		display : none;
	}
	${tablet_landscape} {
		display : none;
	}
	${tablet} {
		width : 20%;
	}
`

export const PostIdx = styled.div`
	display : none;
	${desktop} {
		display : block;
		width : 5%;
		text-align : left;
	}
	${tablet_landscape} {
		display : block;
		width : 5%;
		text-align : left;
	}
`

export const EtcLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: black;
`;

export const EtcItem2 = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  span {
    font-size: 12px;
  }
`;