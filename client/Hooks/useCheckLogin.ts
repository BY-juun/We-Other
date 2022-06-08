import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const useCheckLogin = () => {
	const { push } = useRouter();
	useEffect(() => {
		if (Cookies.get('userIdx') === undefined) {
			alert("* 로그인이 필요합니다");
			push('/');
		}
	}, [])

};

export default useCheckLogin;