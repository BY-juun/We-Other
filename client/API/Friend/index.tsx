import Cookies from "js-cookie";
import { customAxios } from "../../Utils/customAxios";

export const getFriendList = async () => {
	if (!Cookies.get("userIdx")) return;
	const { data } = await customAxios.get('/user/friend/list');
	if (data.isSuccess) return data.result;
}

export const getRequestedFriendListLength = async () => {
	if (!Cookies.get("userIdx")) return { count: null };
	const { data } = await customAxios.get('/user/friend/receive');
	if (data.isSuccess) return data.result;
}

export const AddFriendAPI = async (reqData: { email: string }) => {
	if (!Cookies.get("userIdx")) return;
	const { data } = await customAxios.post('/user/friend', reqData);
	return data;
}

export const getFriendRequestList = async () => {
	if (!Cookies.get("userIdx")) return;
	const { data } = await customAxios.get('/user/friendRequest/list');
	if (data.isSuccess) return data.result;
}

export const replyToFriendRequest = async (reqData: { name: string, answer: string, reqIdx: number }) => {
	const { data } = await customAxios.patch(`/user/friend/answer?answer=${reqData.answer}&friendReqIdx=${reqData.reqIdx}`);
	return data;
}

export const deleteFriendRequest = async (friendReqIdx: number) => {
	const { data } = await customAxios.delete(`/user/friend/delete?friendReqIdx=${friendReqIdx}`);
	return data;
}