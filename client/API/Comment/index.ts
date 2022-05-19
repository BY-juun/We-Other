import { customAxios } from "Utils/customAxios";

export const submitCommentAPI = async ({ id, content }: { id: number; content: string }) => {
	const { data } = await customAxios.post(`/comment/post?postIdx=${id}`, { content: content });
	return data;
};

export const submitCommentOfCommentAPI = async ({ postIdx, commentIdx, content }: { postIdx: number, commentIdx: number, content: string }) => {
	const { data } = await customAxios.post(`/comment/comment?postIdx=${postIdx}&commentIdx=${commentIdx}`, { content: content });
	return data;
}