import { RegistMeetingData } from "../../Types/Meeting"
import { request } from "../../Utils/request"

export const getMeetingListAPI = async () => {
	const res = await request("GET", "/meet/room");
	if (!res.isSuccess) return alert(res.message);
	return res.result;
}


export const registMeetingAPI = async (reqData: RegistMeetingData) => {
	const res = await request("POST", "/meet/room/create", reqData);
	return res;
}

