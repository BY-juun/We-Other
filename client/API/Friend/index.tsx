import Cookies from "js-cookie";
import { request } from "Utils/request";

export const getFriendList = async () => {
	if (!Cookies.get("userIdx")) return [];
	const res = await request("GET", "/user/friend/list");
	console.log(res);
	if (res.isSuccess) return res.result;
}

export const getRequestedFriendListLength = async () => {
	if (!Cookies.get("userIdx")) return { count: null };
	const res = await request("GET", "/user/friend/receive");
	console.log("length", res);
	if (res.isSuccess) return res.result;
}

export const AddFriendAPI = async (reqData: { email: string }) => {
	if (!Cookies.get("userIdx")) return;
	const res = await request("POST", "/user/friend", reqData);
	if (res.isSuccess) return res.message;
}

export const getFriendRequestList = async () => {
	if (!Cookies.get("userIdx")) return [];
	const res = await request("GET", "/user/friend/request/list");
	if (res.isSuccess) return res.result;
}

export const replyToFriendRequest = async (reqData: { name: string, answer: string, reqIdx: number }) => {
	const res = await request("PATCH", `/user/friend/answer?answer=${reqData.answer}&friendReqIdx=${reqData.reqIdx}`);
	if (res.isSuccess) return res.result;
}

export const deleteFriendRequest = async (friendReqIdx: number) => {
	const res = await request("DELETE", `/user/friend/delete?friendReqIdx=${friendReqIdx}`);
	if (res.isSuccess) return res.result;
}