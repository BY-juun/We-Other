import { useRouter } from "next/router";
import { useCallback } from "react";

const useGotoPage = () => {
	const { push } = useRouter();
	const gotoPage = useCallback((path: string) => () => {
		return push(path);
	}, [])
	return gotoPage;
};

export default useGotoPage;