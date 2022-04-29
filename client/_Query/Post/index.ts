import { GetPostsListAPI } from "API/Post";
import { useQuery } from "react-query";

export const useGetPostsList = () => {
  return useQuery(["Posts"], () => GetPostsListAPI(), { retry: false });
};
