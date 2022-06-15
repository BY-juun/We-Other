import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react"
import { setToken } from "../Utils/TokenManager";

const useSetAxiosHeader = () => {
	const { asPath } = useRouter();
	useEffect(() => {
		if (Cookies.get("accessToken") && Cookies.get('userIdx')) {
			console.log("tokenRefresh");
			setToken(String(Cookies.get("accessToken")), Number(Cookies.get('userIdx')));
		}
	}, [asPath])

}

export default useSetAxiosHeader;