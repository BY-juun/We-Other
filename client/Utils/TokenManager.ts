import axios, { HeadersDefaults } from "axios";
import Cookies from "js-cookie";
import { AxiosHeaderDefault } from "./request";

function setToken(accessToken: string, userIdx: number) {
	const expires = new Date();
	(axios.defaults.headers as AxiosHeaderDefault).accesstoken = accessToken
	expires.setDate(Date.now() + 1000 * 60 * 60 * 24);
	Cookies.set("accessToken", accessToken, {
		path: "/",
		expires,
	});

	Cookies.set("userIdx", String(userIdx), {
		path: "/",
		expires,
	});
}

export { setToken };
