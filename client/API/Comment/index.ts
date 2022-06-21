import { request } from "../../Utils/request";

export const submitCommentAPI = async ({ id, content }: { id: number; content: string }) => {
	const res = await request('POST', `/comment/post?postIdx=${id}`, { content: content });
	return res;
};

export const submitCommentOfCommentAPI = async ({ postIdx, commentIdx, content }: { postIdx: number, commentIdx: number, content: string }) => {
	const res = await request('POST', `/comment/comment?postIdx=${postIdx}&commentIdx=${commentIdx}`, { content: content });
	return res;
}