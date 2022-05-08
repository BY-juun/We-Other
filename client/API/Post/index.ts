import { customAxios } from "Utils/customAxios";
import TokenRefresh from "Utils/TokenCheck";

export const GetPostsListAPI = async () => {
  const { data } = await customAxios.get("/post");
  return data;
};

export const submitImg = async (reqData: FormData) => {
  TokenRefresh();
  const { data } = await customAxios.post("/post/image", reqData);
  return data;
};
