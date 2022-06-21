import { AddLikeAPI } from './../../API/Post/index';
import { deletePostAPI, GetPostAPI, GetPostsListAPI, submitImg, submitPost } from "API/Post";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { QueryKey } from '../../Utils/QueryKey';

export const useGetPostsList = () => {
	return useQuery([QueryKey.Posts], () => GetPostsListAPI(), { retry: false });
};

export const useGetPost = (postId: number) => {
	return useQuery([QueryKey.Post, postId], () => GetPostAPI(postId), {
		retry: false,
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		refetchOnMount: false
	});
};

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

export const useSubmitPost = () => {
	const router = useRouter();
	return useMutation(submitPost, {
		onSuccess: (res) => {
			if (!res.isSuccess) return alert(res.message);
			alert("*게시글 등록되었어요.");
			return router.push("/Posts");
		},
	});
};

export const useDeletePost = () => {
	const router = useRouter();
	return useMutation(deletePostAPI, {
		onSuccess: (res) => {
			if (!res.isSuccess) return alert(res.message);
			alert("* 게시글이 삭제되었어요.");
			return router.push("/Posts");
		},
	});
};

export const useAddLike = () => {
	const queryClient = useQueryClient();
	return useMutation(AddLikeAPI, {
		onSuccess: (res, variable) => {
			if (variable.type === "post") {
				let countChangeValue: number = 0;
				if (res.result === 1) countChangeValue = 1;
				else {
					countChangeValue = -1;
					alert("* 좋아요가 취소되었어요.");
				}
				queryClient.setQueryData(["Post", variable.postIdx], (prevData: any) => {
					return { ...prevData as Object, likeCount: prevData?.likeCount + countChangeValue }
				})
			}

		}
	})
}