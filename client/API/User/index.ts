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

export const UserInfoAPI = async (userIdx: number) => {
  const { data } = await customAxios.get(`/user/${userIdx}`);
  return data;
};
