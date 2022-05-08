import { GetPostsListAPI, submitImg, submitPost } from "API/Post";
import { useMutation, useQuery } from "react-query";

export const useGetPostsList = () => {
  return useQuery(["Posts"], () => GetPostsListAPI(), { retry: false });
};

type submitImgSuccess = (imgIdx: number[]) => void;

export const useSubmitImg = (onSuccess: submitImgSuccess) => {
  return useMutation(submitImg, {
    onSuccess: (res) => {
      if (!res.isSuccess) {
        return alert(res.message);
      }
      onSuccess(res?.result);
    },
  });
};

export const useSubmitPost = (onSuccess: () => void) => {
  return useMutation(submitPost, {
    onSuccess: (res) => {
      if (!res.isSuccess) {
        return alert(res.message);
      }
      onSuccess();
    },
  });
};
