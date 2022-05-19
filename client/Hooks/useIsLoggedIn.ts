import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
const useIsLoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	useEffect(() => {
		if (Cookies.get("userIdx") !== undefined) setIsLoggedIn(true);
	}, [Cookies.get("userIdx")])

	return isLoggedIn;
};

export default useIsLoggedIn;