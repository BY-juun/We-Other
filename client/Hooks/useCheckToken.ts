import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { request } from "../Utils/request";

const useCheckToken = (setLoading: React.Dispatch<React.SetStateAction<boolean>>, setUserIdx: React.Dispatch<React.SetStateAction<number>>) => {
	const { query, push } = useRouter();
	const checkToken = useCallback(async () => {
		const data = await request("GET", `/user/verify/passwd/token?token=${query.token}`);
		if (!data.isSuccess) {
			alert("* 비정상적인 접근입니다");
			push('/');
		}
		else setUserIdx(data.result.userIdx);
	}, [])
	useEffect(() => {
		if (!Cookies.get('userIdx')) checkToken();
		else setUserIdx(Number(Cookies.get('userIdx')));
		setLoading(false);
	}, [])
};

export default useCheckToken;