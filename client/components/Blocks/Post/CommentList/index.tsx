import Image from "next/image";
import React from "react";
import { CommentContent, CommentDate, CommentListRoot, CommentListTop, UnHeartBtn } from "./styles";

const CommentList = () => {
	return (
		<CommentListRoot>
			<CommentListTop>
				<div>
					<Image src="/defaultUser.png" alt="User" width={20} height={20} />
					<span>익명 {Math.floor(Math.random() * 100)}</span>
				</div>
				<div>
					<UnHeartBtn>
						<Image src="/unheart.png" alt="User" width={15} height={15} />
					</UnHeartBtn>
				</div>
			</CommentListTop>
			<CommentContent>
				댓글내용 abcdeftwerwqer
			</CommentContent>
			<CommentDate>
				2021.04.21
			</CommentDate>
		</CommentListRoot>);
};

export default CommentList;
