import { SubmitPostReqData } from "Types/Post";
import { customAxios } from "Utils/customAxios";

export const GetPostsListAPI = async () => {
	const { data } = await customAxios.get("/post");
	if (!data.isSuccess) return alert(data.message);
	return data.result;
};

export const GetPostAPI = async (id: number) => {
	const { data } = await customAxios.get(`/post/${id}`);
	if (!data.isSuccess) return alert(data.message);
	return data.result
}

export const submitImg = async (reqData: FormData) => {
	console.log(customAxios);
	const { data } = await customAxios.post("/post/image", reqData);
	return data;
};

export const submitPost = async (reqData: SubmitPostReqData) => {
	const { data } = await customAxios.post("/post", reqData);
	return data;
};

export const deletePostAPI = async (id: number) => {
	const { data } = await customAxios.delete(`/post/delete?postIdx=${id}`);
	return data;
}
