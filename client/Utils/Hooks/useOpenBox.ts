import { useEffect } from "react";

const useOpenBox = (open: boolean, boxRef: React.RefObject<HTMLDivElement>) => {
	useEffect(() => {
		if (boxRef.current) {
			if (open) boxRef.current.style.height = "85%"
			else boxRef.current.style.height = "0%"
		}
	}, [open])
};

export default useOpenBox;