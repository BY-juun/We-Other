import React from "react";
import { CountArea, EtcArea, EtcItem, PostCardRoot, PostContent, PostDate, PostIdx, PostLeft, PostTitle, PostWriter, ThumbNail } from "./styles";
import Image from "next/image";
import { PostArrayType } from "../../../Types/Post";
import { dateForm } from "../../../Utils/dateForm";
import { ServerURL } from "../../../Utils/ServerURL";
import useGotoPage from "../../../Hooks/useGotoPage";

interface Props {
	PostInfo: PostArrayType;
}

const PostCard: (props: Props) => JSX.Element = ({ PostInfo }) => {
	const gotoPage = useGotoPage();

	return (
		<PostCardRoot onClick={gotoPage(`/Post/${PostInfo.postIdx}`)}>
			<PostLeft>
				<PostIdx>{PostInfo.postIdx}</PostIdx>
				<PostTitle>{PostInfo.title}</PostTitle>
				<PostContent>{PostInfo.content}</PostContent>
				<EtcArea>
					<EtcItem>
						<PostDate>{dateForm(PostInfo.updatedAt)}</PostDate>
						<CountArea>
							<Image src={"/heart.png"} alt="좋아요" width={15} height={15} />
							<span>{PostInfo.likeCount}</span>
						</CountArea>
						<CountArea>
							<Image src={"/comment.png"} alt="댓글" width={15} height={15} />
							<span>{PostInfo.commentCount}</span>
						</CountArea>
					</EtcItem>
					<div></div>
				</EtcArea>
			</PostLeft>
			{PostInfo.url && <ThumbNail> <img src={`${ServerURL}/${PostInfo.url}`} /> </ThumbNail>}
		</PostCardRoot>
	);
};

export default PostCard;
