import "../styles/global.css";
import type { AppContext, AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import Head from "next/head";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "Layouts/Header";
import useSetProgressState from "Hooks/useSetProgressState";
import PageLoading from "Utils/PageLoading";
import { Wrapper } from "./styles";
import { RecoilRoot } from "recoil";
import cookies from "next-cookies";
import { setToken } from "Utils/TokenManager";
import App from "next/app";

const WeOther = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState<boolean>(false);
  useSetProgressState(setLoading);
  console.log(Component);
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

//for SSR
WeOther.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const appProps = await App.getInitialProps(appContext);
  const allCookies = cookies(ctx);
  const accessTokenByCookie = allCookies["accessToken"];
  const userIdx = allCookies["userIdx"];
  if (accessTokenByCookie !== undefined && userIdx !== undefined) {
    setToken(accessTokenByCookie, Number(userIdx));
  }
  return {
    ...appProps,
  };
};

export default WeOther;
