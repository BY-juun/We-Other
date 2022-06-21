import axios, { HeadersDefaults, Method } from "axios";
import Cookies from "js-cookie";
import { ServerURL } from "./ServerURL";

export interface AxiosHeaderDefault extends HeadersDefaults {
	accesstoken: string
}

export const request = async (method: Method | undefined, url: string, data?: any) => {
	const reqHeader = { "accesstoken": Cookies.get("accessToken") || "" }
	return axios({
		method,
		url: `${ServerURL}/api${url}`,
		data,
		headers: reqHeader
	})
		.then((res) => {
			return res.data
		})
		.catch((err) => console.error(err));
}