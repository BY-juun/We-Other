import { LoginAPI, SignUpAPI } from "API/User";
import { useMutation } from "react-query";

export const useSignUp = (onSuccess: () => void) => {
  return useMutation(SignUpAPI, {
    onSuccess: (response) => {
      console.log(response);
      onSuccess();
    },
  });
};

export const useLogin = (onSuccess: () => void) => {
  return useMutation(LoginAPI, {
    onSuccess: (response) => {
      console.log(response);
      onSuccess();
    },
  });
};
