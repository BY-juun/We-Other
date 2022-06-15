import { useQueryClient } from 'react-query';
import { useCallback } from 'react';
import Cookies from "js-cookie";

const useLogout = () => {
	const QueryClient = useQueryClient();
	const logout = useCallback(() => {
		Cookies.remove("accessToken");
		Cookies.remove("userIdx");
		QueryClient.invalidateQueries();
		alert("*로그아웃 되었습니다");
	}, [Cookies]);
	return logout;
};

export default useLogout;