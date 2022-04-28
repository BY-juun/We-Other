import { customAxios } from "Utils/customAxios";

export const GetPostsListAPI = async () => {
  const { data } = await customAxios.get("/post");
  return data;
};
