import { useEffect } from "react";

const useSearchAnimation = (inputRef: React.RefObject<HTMLInputElement>, btnRef: React.RefObject<HTMLInputElement>, openSearch: boolean) => {
	useEffect(() => {
		if (inputRef.current && btnRef.current) {
			if (openSearch) {
				inputRef.current.style.width = "50%";
				inputRef.current.style.paddingLeft = "15px";
				inputRef.current.style.paddingRight = "15px";
				inputRef.current.placeholder = "검색어를 입력해주세요.";
				btnRef.current.style.width = "60px";
				btnRef.current.style.paddingLeft = "10px";
				btnRef.current.style.paddingRight = "10px";
				btnRef.current.placeholder = "검색";
			}
			else {
				inputRef.current.style.width = "0";
				inputRef.current.style.paddingLeft = "0";
				inputRef.current.style.paddingRight = "0";
				inputRef.current.placeholder = "";
				btnRef.current.style.width = "0";
				btnRef.current.style.paddingLeft = "0";
				btnRef.current.style.paddingRight = "0";
				inputRef.current.placeholder = "";
			}
		}

	}, [openSearch])
};

export default useSearchAnimation;