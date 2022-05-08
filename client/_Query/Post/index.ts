import { GetPostsListAPI, submitImg } from "API/Post";
import { useMutation, useQuery } from "react-query";

export const useGetPostsList = () => {
  return useQuery(["Posts"], () => GetPostsListAPI(), { retry: false });
};

export const useSubmitImg = (onSuccess: () => void) => {
  return useMutation(submitImg, {
    onSuccess: (res) => {
      if (!res.isSuccess) {
        return alert(res.message);
      }
      onSuccess();
    },
  });
};
