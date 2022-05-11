import Cookies from "js-cookie";
import { customAxios } from "./customAxios";

function setToken(accessToken: string, userIdx: number) {
  customAxios.defaults.headers.common["accesstoken"] = accessToken;
  console.log(customAxios.defaults.headers);
  const expires = new Date();
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
