import Image from 'next/image'
import React from 'react'
import { CommentOfCommentType } from '../../../../Types/Post'
import { UnknownUserImg } from '../CommentList/styles'
import { CommentBox, CommentContent, CommentOfCommentRoot, DownArrowImg, UserArea } from './styles'

const CommentOfComment = ({ commentOfComment }: { commentOfComment: CommentOfCommentType }) => {
	return (
		<CommentOfCommentRoot>
			<DownArrowImg src="/downarrow.png" />
			<CommentBox>
				<UserArea>
					<UnknownUserImg src="/defaultUser.png" alt="User" />
					<span>익명 {commentOfComment.orderOfComment}</span>
				</UserArea>
				<CommentContent>{commentOfComment.content}</CommentContent>
			</CommentBox>
		</CommentOfCommentRoot>
	)
}

export default CommentOfComment