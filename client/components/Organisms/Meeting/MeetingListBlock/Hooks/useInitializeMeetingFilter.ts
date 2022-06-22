import { useSetRecoilState } from "recoil";
import { filterSex, filterCapacity } from "store/meeting";

const useInitializeMeetingFilter = () => {
	const setSex = useSetRecoilState(filterSex);
	const setCapacity = useSetRecoilState(filterCapacity);
	return () => {
		setCapacity(0);
		setSex("전체")
	}
};

export default useInitializeMeetingFilter;