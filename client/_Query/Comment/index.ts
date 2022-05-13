import { submitComment } from "API/Comment";
import { useMutation } from "react-query";

export const useSubmitComment = (onSuccess: () => void) => {
  return useMutation(submitComment, {
    onSuccess: () => {
      onSuccess();
    },
  });
};
