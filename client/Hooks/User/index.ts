import { LoginAPI, SignUpAPI, UserInfoAPI } from "API/User";
import { useAppDispatch } from "Hooks/useAppDispatch";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { ReducerType } from "store/rootReducer";
import { initializeSignUpData, SignUpState } from "store/slices/SignUp";
import { LoginResponse, UserInfo } from "../../Types/User";
import { setToken } from "../../Utils/TokenManager";

export const useSignUp = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { email, password, userName, admission, department, sex } = useSelector<ReducerType, SignUpState>((state) => state.signupSlice);
	const reqData = {
		email: email,
		passwd: password,
		userName: userName,
		admission: admission,
		sex: sex,
		department: department,
	};
	return useMutation(() => SignUpAPI(reqData), {
		onSuccess: (res) => {
			if (!res.isSuccess) {
				return alert(res.message);
			}
			dispatch(initializeSignUpData);
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
	return useQuery<UserInfo>(["userInfo"], () => UserInfoAPI(), {
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		refetchOnMount: false,
		retry: false,
	});
};

