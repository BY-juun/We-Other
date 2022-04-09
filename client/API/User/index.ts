import axios from "axios";
import { LoginData, SignUpData } from "Types/User";
import { targetUrl } from "Utils/targetUrl";

export const SignUpAPI = async (reqData: SignUpData) => {
  const res = await axios.post(`${targetUrl}/user/sign-up`, reqData);
  console.log(res);
  return res;
};

export const LoginAPI = async (reqData: LoginData) => {
  const res = await axios.post(`${targetUrl}/user/login`, reqData);
  console.log(res);
  return res;
};
