import { SubmitPostReqData } from "Types/Post";
import { request } from "../../Utils/request";

export const GetPostsListAPI = async () => {
	const res = await request('GET', '/post');
	if (!res.isSuccess) return alert(res.message);
	return res.result;
};

export const GetPostAPI = async (id: number) => {
	const res = await request('GET', `/post/${id}`);
	if (!res.isSuccess) return alert(res.message);
	return res.result
}

export const submitImg = async (reqData: FormData) => {
	const res = await request('POST', "/post/image", reqData);
	return res;
};

export const submitPost = async (reqData: SubmitPostReqData) => {
	const res = await request('POST', "/post", reqData);
	return res;
};

export const deletePostAPI = async (id: number) => {
	const res = await request('DELETE', `/post/delete?postIdx=${id}`);
	return res;
}

export const AddLikeAPI = async ({ postIdx, commentIdx, type }: { postIdx?: number, commentIdx?: number, type: string }) => {
	let body;
	if (type === "comment") body = { commentIdx: commentIdx };
	else if (type === "post") body = { postIdx: postIdx }
	const res = await request('PATCH', '/user/like', body);
	return res;
}
