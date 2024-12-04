import "styles/index.css";

import Head from "next/head";
import localFont from "next/font/local";

const helveticaNeue = localFont({
  src: [
    {
      path: "../fonts/HelveticaNeue.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <main className={`${helveticaNeue.variable} font-sans`}>
        <Component {...pageProps} key="main" />
      </main>
    </>
  );
}

export default App;
