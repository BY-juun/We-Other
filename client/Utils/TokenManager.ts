import cookie from "react-cookies";
import { customAxios } from "./customAxios";

function setToken(accessToken: string, userIdx: number) {
  customAxios.defaults.headers.common["Authorization"] = accessToken;

  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24);

  cookie.save("accessToken", accessToken, {
    path: "/",
    expires,
    //httpOnly: process.env.NODE_ENV === "production" ? false : true, // dev/prod 에 따라 true / false 로 받게 했다.
  });

  cookie.save("userIdx", userIdx, {
    path: "/",
    expires,
  });
}

export { setToken };
