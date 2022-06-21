import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
const useCheckLogin = () => {
	useEffect(() => {
		if (Cookies.get('userIdx') === undefined) {
			alert("* 로그인이 필요한 서비스에요");
			window.location.replace('/');
		}
	}, [])
};

export default useCheckLogin;