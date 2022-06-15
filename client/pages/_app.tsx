import "../styles/global.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import Head from "next/head";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "components/Layouts/Header";
import useSetProgressState from "Hooks/useSetProgressState";
import PageLoading from "Utils/PageLoading";
import { Wrapper } from "./styles";
import useSetAxiosHeader from "../Hooks/useSetAxiosHeader";
import { RecoilRoot } from "recoil";

const WeOther = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(() => new QueryClient());
	const [loading, setLoading] = useState<boolean>(false);
	useSetProgressState(setLoading);
	useSetAxiosHeader();
	return (
		<>
			{loading ? (
				<>{PageLoading(loading)}</>
			) : (
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps?.dehydratedState}>
						<RecoilRoot>
							<Header />
							<Head>
								<meta charSet="utf-8" />
								<title>WeOther</title>
							</Head>
							<Wrapper>
								<Component {...pageProps} />
							</Wrapper>
						</RecoilRoot>
						<ReactQueryDevtools initialIsOpen={false} />
					</Hydrate>
				</QueryClientProvider>
			)}
		</>
	);
};

export default WeOther;
