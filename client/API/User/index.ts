import Cookies from "js-cookie";
import { LoginData, SignUpData } from "Types/User";
import { customAxios } from "../../Utils/customAxios";

export const SignUpAPI = async (reqData: SignUpData) => {
  const { data } = await customAxios.post(`/user/sign-up`, reqData);
  return data;
};

export const LoginAPI = async (reqData: LoginData) => {
  const { data } = await customAxios.post(`/user/sign-in`, reqData);
  return data;
};

export const UserInfoAPI = async () => {
  const userIdx = Cookies.get("userIdx");
  console.log(userIdx);
  if (!userIdx) return;
  const { data } = await customAxios.get(`/user/${userIdx}`);
  if (data?.isSuccess) {
    return data?.result;
  }
  return false;
};
