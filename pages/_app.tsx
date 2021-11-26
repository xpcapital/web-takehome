import 'styles/index.scss';

import Head from 'next/head';

import useCssMobileHeight from 'hooks/useCssMobileHeight';

function App({ Component, pageProps }) {
  useCssMobileHeight();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} key="main" />
    </>
  );
}

export default App;
