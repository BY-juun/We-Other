import "../styles/global.css";
import type { AppContext, AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import Head from "next/head";
import { ReactQueryDevtools } from "react-query/devtools";
import cookies from "next-cookies";
import { setToken } from "../Utils/TokenManager"
import Header from "components/Layouts/Header";
import useSetProgressState from "Hooks/useSetProgressState";
import PageLoading from "Utils/PageLoading";
import { Wrapper } from "./styles";

const WeOther = ({ Component, pageProps }: AppProps) => {
	const [queryClient] = useState(() => new QueryClient());
	const [loading, setLoading] = useState<boolean>(false);
	useSetProgressState(setLoading);
	return (
		<>
			{loading ? (
				<>{PageLoading(loading)}</>
			) : (
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps?.dehydratedState}>
						<Header />
						<Head>
							<meta charSet="utf-8" />
							<title>WeOther</title>
						</Head>
						<Wrapper>
							<Component {...pageProps} />
						</Wrapper>
						<ReactQueryDevtools initialIsOpen={false} />
					</Hydrate>
				</QueryClientProvider>
			)}
		</>
	);
};

WeOther.getInitialProps = async (appContext: AppContext) => {
	const { ctx } = appContext;
	const allCookies = cookies(ctx);
	const accessTokenByCookie = allCookies["accessToken"];
	const userIdx = allCookies["userIdx"];
	if (accessTokenByCookie !== undefined && userIdx !== undefined) {
		setToken(accessTokenByCookie, Number(userIdx));
	}
	return {};
};
export default WeOther;
