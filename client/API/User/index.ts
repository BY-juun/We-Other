import axios from "axios";
import { LoginData, SignUpData } from "Types/User";
import { targetUrl } from "Utils/targetUrl";

export const SignUpAPI = async (reqData: SignUpData) => {
  const { data } = await axios.post(`${targetUrl}/user/sign-up`, reqData);
  return data;
};

export const LoginAPI = async (reqData: LoginData) => {
  const { data } = await axios.post(`${targetUrl}/user/login`, reqData);
  return data;
};
