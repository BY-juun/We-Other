import { QueryKey } from './../../Utils/QueryKey';
import { submitCommentAPI, submitCommentOfCommentAPI } from "API/Comment";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "react-query";
import { PostType } from "../../Types/Post";

export const useSubmitComment = (onSuccess: () => void) => {
	const queryClient = useQueryClient();
	return useMutation(submitCommentAPI, {
		onSuccess: (data, variables) => {
			const newComment = {
				commentIdx: data.result.commentIdx,
				content: variables.content,
				createdAt: data.result.createdAt,
				orderOfComment: data.result.orderOfComment,
				userIdx: Number(Cookies.get("userIdx")),
				commentOfComment: undefined,
			}
			const newData: PostType | undefined = queryClient.getQueryData([QueryKey.Post, variables.id])
			newData?.CommentOfPost.push(newComment);
			queryClient.setQueryData(["Post", variables.id], newData);
			onSuccess();
		},
	});
};

export const useSubmitCommentOfComment = (onSuccess: () => void) => {
	const queryClient = useQueryClient();
	return useMutation(submitCommentOfCommentAPI, {
		onSuccess: (data, variable) => {
			const newComment = {
				commentIdx: data.result.commentIdx,
				content: variable.content,
				createdAt: data.result.createdAt,
				orderOfComment: data.result.orderOfComment,
				userIdx: Number(Cookies.get("userIdx")),
			}
			const newData: PostType | undefined = queryClient.getQueryData([QueryKey.Post, variable.postIdx]);
			const CommentOfPost = newData?.CommentOfPost;
			const commentArr = CommentOfPost?.find((comment) => comment.commentIdx === variable.commentIdx)

			if (commentArr?.commentOfComment) commentArr.commentOfComment.push(newComment);
			else commentArr!.commentOfComment = [newComment];

			newData!.commentCount += 1;

			queryClient.setQueryData([QueryKey.Post, variable.postIdx], newData)
			onSuccess();
		}
	})
}