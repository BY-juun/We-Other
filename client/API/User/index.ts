import Cookies from "js-cookie";
import { LoginData, SignUpData } from "Types/User";
import { request } from "../../Utils/request";

export const SignUpAPI = async (reqData: SignUpData) => {
  const res = await request("POST", "/user/sign-up", reqData);
  return res;
};

export const LoginAPI = async (reqData: LoginData) => {
  const res = await request("POST", "/user/sign-in", reqData);
  return res;
};

export const getUserInfoAPI = async () => {
  const userIdx = Cookies.get("userIdx");
  if (!userIdx) return;
  const res = await request("GET", `/user/${userIdx}`);
  if (res?.isSuccess) {
    return res?.result;
  }
  return false;
};

export const getUserDetailInfoAPI = async (userIdx: number) => {
  const res = await request("GET", `/user/intro/${userIdx}`);
  if (!res?.isSuccess) return alert(res.message);
  return res.result;
};
