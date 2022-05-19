import { LoginAPI, SignUpAPI, UserInfoAPI } from "API/User";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { LoginResponse, UserInfo } from "../../Types/User";
import { setToken } from "../../Utils/TokenManager";

export const useSignUp = () => {
  const router = useRouter();
  return useMutation(SignUpAPI, {
    onSuccess: (res) => {
      if (!res.isSuccess) {
        return alert(res.message);
      }
      alert("*회원가입에 성공하셨습니다!");
      return router.push("/");
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(LoginAPI, {
    onSuccess: (res: LoginResponse) => {
      if (!res.isSuccess) return alert(res.message);
      const { accessToken, userIdx } = res.result;
      setToken(accessToken, userIdx);
      queryClient.invalidateQueries(["userInfo"]);
      return alert("로그인 성공!");
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
