import HashLoader from "react-spinners/HashLoader";
import { LoaderCss, LoaderWrapper } from "./styles";


const Loading = (loading: boolean, size: number) => {
	return (
		<LoaderWrapper>
			<LoaderCss>
				<HashLoader
					loading={loading} size={size} color="#fc96a5"></HashLoader>
			</LoaderCss>
		</LoaderWrapper>
	)
};

export default Loading;