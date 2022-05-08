import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:4001/api",
  withCredentials: true,
}); //로컬에 연결할 때
