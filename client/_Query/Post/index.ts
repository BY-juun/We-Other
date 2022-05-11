import { deletePostAPI, GetPostAPI, GetPostsListAPI, submitImg, submitPost } from "API/Post";
import { useMutation, useQuery } from "react-query";

export const useGetPostsList = () => {
	return useQuery(["Posts"], () => GetPostsListAPI(), { retry: false });
};

export const useGetPost = (postId: number) => {
	return useQuery(["Post", postId], () => GetPostAPI(postId), { retry: false, refetchOnMount: false, refetchOnWindowFocus: false })
}

type submitImgSuccess = (imgIdx: number[]) => void;

export const useSubmitImg = (onSuccess: submitImgSuccess) => {
	return useMutation(submitImg, {
		onSuccess: (res) => {
			if (!res.isSuccess) {
				return alert(res.message);
			}
			onSuccess(res?.result);
		},
	});
};

export const useSubmitPost = (onSuccess: () => void) => {
	return useMutation(submitPost, {
		onSuccess: (res) => {
			if (!res.isSuccess)
				return alert(res.message);
			onSuccess();
		},
	});
};

export const useDeletePost = (onSuccess: () => void) => {
	return useMutation(deletePostAPI, {
		onSuccess: (res) => {
			if (!res.isSuccess)
				return alert(res.message);
			onSuccess();
		}
	})
}