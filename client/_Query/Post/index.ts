import { deletePostAPI, GetPostAPI, GetPostsListAPI, submitImg, submitPost } from "API/Post";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";

export const useGetPostsList = () => {
	return useQuery(["Posts"], () => GetPostsListAPI(), { retry: false });
};

export const useGetPost = (postId: number) => {
	return useQuery(["Post", postId], () => GetPostAPI(postId), {
		retry: false,
		refetchOnWindowFocus: false,
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
			alert("*게시글 등록이 완료되었습니다");
			return router.push("/Posts");
		},
	});
};

export const useDeletePost = () => {
	const router = useRouter();
	return useMutation(deletePostAPI, {
		onSuccess: (res) => {
			if (!res.isSuccess) return alert(res.message);
			alert("* 삭제완료가 완료되었습니다.");
			return router.push("/Posts");
		},
	});
};
