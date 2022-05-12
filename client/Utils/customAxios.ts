import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { ServerURL } from "./ServerURL";

export const customAxios: AxiosInstance = axios.create({

	baseURL: `${ServerURL}/api`,
	//withCredentials: true,
	headers: {
		accesstoken: Cookies.get("accessToken") || "",
	},

}); //로컬에 연결할 때
