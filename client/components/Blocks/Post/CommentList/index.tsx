import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useAddLike } from "../../../../Hooks/Post";
import { CommentType } from "../../../../Types/Post";
import { dateFormDetail } from "../../../../Utils/dateFormDetail";
import CommentModal from "../CommentModal";
import CommentOfComment from "../CommentOfComment";
import { CommentBtn, CommentContent, CommentDate, CommentListRoot, CommentListTop, CommentRight, UnknownUserImg } from "./styles";

const CommentList = ({ comment, postIdx }: { comment: CommentType, postIdx: number }) => {

	const AddLikeMutation = useAddLike();
	const [openCommentModal, setOpenCommentModal] = useState<boolean>(false);

	const clickCommentModalOpen = useCallback(() => {
		setOpenCommentModal(true);
	}, [])

	const closeCommentModal = useCallback(() => {
		setOpenCommentModal(false);
	}, [])

	const onClickLike = useCallback(() => {
		const reqData = {
			CommentIdx: comment.commentIdx,
			type: "comment"
		}
		AddLikeMutation.mutate(reqData);
	}, [])


	return (
		<>
			<CommentListRoot>
				<CommentListTop>
					<div>
						<UnknownUserImg src="/defaultUser.png" alt="User" />
						<span>익명{comment.orderOfComment}</span>
					</div>
					<CommentRight>
						<CommentBtn onClick={clickCommentModalOpen}>
							<Image src="/comment.png" alt="User" width={13} height={13} />
						</CommentBtn>
						<button onClick={onClickLike}>
							<Image src="/heart.png" alt="User" width={15} height={15} />
						</button>
					</CommentRight>
				</CommentListTop>
				<CommentContent>
					{comment.content}
				</CommentContent>
				<CommentDate>
					{dateFormDetail(comment.createdAt)}
				</CommentDate>
				{comment.commentOfComment &&
					comment.commentOfComment.map((commentOfComment, idx) => {
						return <CommentOfComment key={commentOfComment.commentIdx + idx} commentOfComment={commentOfComment} />
					})}
			</CommentListRoot>
			{openCommentModal && <CommentModal onClose={closeCommentModal} commentIdx={comment.commentIdx} postIdx={postIdx} />}
		</>
	);
};

export default CommentList;
