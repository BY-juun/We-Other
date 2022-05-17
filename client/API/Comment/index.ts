import { customAxios } from "Utils/customAxios";

export const submitComment = async ({ id, content }: { id: number; content: string }) => {
	const { data } = await customAxios.post(`/comment/post?postIdx=${id}`, { content: content });
	return data;
};
