import "../styles/globals.css";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { useRef } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import Head from "next/head";
import { ReactQueryDevtools } from "react-query/devtools";
import cookies from "next-cookies";
import { setToken } from "../Utils/TokenManager";
import { NextComponentType, NextPage, NextPageContext } from "next";

const WeOther = ({ Component, pageProps }: AppProps) => {
	const queryClientRef = useRef<QueryClient>();
	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient();
	}

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<Hydrate state={pageProps.dehydratedState}>
				<Head>
					<meta charSet="utf-8" />
					<title>WeOther</title>
				</Head>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	);
}

WeOther.getInitialProps = async (appContext: AppContext) => {
	const { ctx } = appContext;
	const allCookies = cookies(ctx);
	const accessTokenByCookie = allCookies['accessToken'];
	if (accessTokenByCookie !== undefined) {
		const refreshTokenByCookie = (allCookies["refreshToken"] || "");
		setToken(accessTokenByCookie, refreshTokenByCookie)
	}

	return {};
}
export default WeOther;
