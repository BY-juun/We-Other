import { LoginAPI, SignUpAPI } from "API/User";
import { useMutation } from "react-query";
import { LoginResponse } from "../../Types/User";
import { customAxios } from "../../Utils/customAxios";
import { setToken } from "../../Utils/TokenManager";

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
		onSuccess: (response: LoginResponse) => {
			console.log(response);
			setToken(response.result.accessToken, response.result.refreshToken);
			onSuccess();
		},
	});
};
