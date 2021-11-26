import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Did you get lost?" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="404" />
        <meta property="og:description" content="Did you get lost?" />
      </Head>
      <section>
        <main>
          <p>You're definitively lost.</p>
        </main>
      </section>
    </>
  );
};

export default Custom404;
