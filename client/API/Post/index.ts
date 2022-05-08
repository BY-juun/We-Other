import { SubmitPostReqData } from "Types/Post";
import { customAxios } from "Utils/customAxios";

export const GetPostsListAPI = async () => {
  const { data } = await customAxios.get("/post");
  return data;
};

export const submitImg = async (reqData: FormData) => {
  const { data } = await customAxios.post("/post/image", reqData);
  return data;
};

export const submitPost = async (reqData: SubmitPostReqData) => {
  const { data } = await customAxios.post("/post", reqData);
  return data;
};
