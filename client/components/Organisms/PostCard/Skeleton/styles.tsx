import styled from "@emotion/styled";
import { skeletonAnimation } from "../../../../Utils/Skeleton/animation";
import { desktop, mobile, tablet, tablet_landscape } from "../../../../Utils/styles";

export const IdSkeleton = styled.div`
	display : none;
	${desktop} {
		display : block;
		width : 2%;
		margin-right : 3%;
		height: 28px;
		background: #f2f2f2;
		animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
	}
	${tablet_landscape} {
		display : block;
		width : 2%;
		margin-right : 3%;
		height: 28px;
		background: #f2f2f2;
		animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
	}
`

export const SkeletonWrapper = styled.div`
	width : 100%;
	height : 100%;
	display : flex;
	${mobile} {
		flex-direction : column;
		width : 60%;
		gap : 10px;
	}
	${tablet} {
		flex-direction : column;
		width : 80%;
		gap : 10px;
	}
`
export const PostTitleSkeleton = styled.div`
	background: #f2f2f2;
	animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
	width : 70%;
	margin-right : 2.5%;
	height: 18px;
	${desktop} {
		width : 20%;
		margin-right : 2.5%;
		height: 28px;
	}
	${tablet_landscape} {
		width : 20%;
		margin-right : 2.5%;
		height: 28px;
	}
`

export const MobileDateSkeleton = styled.div`
	background: #f2f2f2;
	animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
	width : 50%;
	margin-right : 2.5%;
	height: 18px;
	${desktop} {
		display : none;
	}
	${tablet_landscape} {
		display : none;
	}
`

export const PostContentSkeleton = styled.div`
	background: #f2f2f2;
	animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
	width : 90%;
	margin-right : 2.5%;
	height: 20px;
	${desktop} {
		width : 55%;
		margin-right : 2.5%;
		height: 28px;
	}
	${tablet_landscape} {
		width : 55%;
		margin-right : 2.5%;
		height: 28px;
	}
`
export const PostDateSkeleton = styled.div`
	background: #f2f2f2;
	animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
	width : 100px;
	margin-right : 2.5%;
	height: 100%;
	${desktop} {
		width : 55%;
		margin-right : 2.5%;
		height: 28px;
	}
	${tablet_landscape} {
		width : 55%;
		margin-right : 2.5%;
		height: 28px;
	}
`

export const PostEtcSkeleton = styled.div`
	background: #f2f2f2;
	animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
	${desktop} {
		width : 17.5%;
		margin-right : 2.5%;
		height: 28px;
	}
	${tablet_landscape} {
		width : 17.5%;
		margin-right : 2.5%;
		height: 28px;
	}
`