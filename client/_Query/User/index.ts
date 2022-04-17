import { LoginAPI, SignUpAPI, UserInfoAPI } from "API/User";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { LoginResponse, UserInfo } from "../../Types/User";
import { setToken } from "../../Utils/TokenManager";

export const useSignUp = (onSuccess: () => void) => {
  return useMutation(SignUpAPI, {
    onSuccess: (res) => {
      if (!res.isSuccess) {
        return alert(res.message);
      }
      onSuccess();
    },
  });
};

export const useLogin = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(LoginAPI, {
    onSuccess: (res: LoginResponse) => {
      if (!res.isSuccess) return alert(res.message);
      const { accessToken, userIdx } = res.result;
      setToken(accessToken, userIdx);
      queryClient.invalidateQueries(["userInfo"]);
      onSuccess();
    },
  });
};

export const useGetUserInfo = () => {
  return useQuery<UserInfo | undefined>(["userInfo"], () => UserInfoAPI(), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    refetchOnMount: false,
    retry: false,
  });
};
