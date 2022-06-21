import { useEffect } from 'react';
const useOpenMobileMenu = (open: boolean, ref: React.RefObject<HTMLDivElement>) => {
	useEffect(() => {
		if (!ref.current) return;
		if (open) ref.current.style.width = "180px";
		else ref.current.style.width = "0px";
	}, [open])
};

export default useOpenMobileMenu;