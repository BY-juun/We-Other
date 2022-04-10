import { LoginAPI, SignUpAPI } from "API/User";
import { useMutation } from "react-query";

export const useSignUp = (onSuccess: () => void) => {
  return useMutation(SignUpAPI, {
    onSuccess: (res) => {
      if (!res.isSucces) {
        return alert(res.message);
      }
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
