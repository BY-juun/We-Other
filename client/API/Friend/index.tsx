import Cookies from "js-cookie";
import { customAxios } from "../../Utils/customAxios";

export const AddFriendAPI = async (reqData: { email: string }) => {
	const userIdx = Cookies.get("userIdx");
	if (!userIdx) return;
	const { data } = await customAxios.post('/user/friend', reqData);
	if (data?.isSuccess) {
		return data?.result;
	}
	return false;
}

export const getFriendRequestList = async () => {

}

export const replyToFriendRequest = async (reqData: { answer: string, reqIdx: number }) => {
	const { data } = await customAxios.patch(`/user/friend/answer=${reqData.answer}&reqIdx=${reqData.reqIdx}`);
	return data;
}