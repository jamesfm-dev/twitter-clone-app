import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>
        <Component {...pageProps} />;
      </main>
    </>
  );
}

export default MyApp;
