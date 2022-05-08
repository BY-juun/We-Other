import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:4001/api",
  withCredentials: true,
  headers: {
    accesstoken: Cookies.get("accessToken") || "",
  },
}); //로컬에 연결할 때
