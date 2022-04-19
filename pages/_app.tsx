import '../src/styles/globals.css'
import Head from 'next/head';
import useCssMobileHeight from 'hooks/useCssMobileHeight';
import generateChats from 'data/chats';
import generateUsers from 'data/users';
import ChatInterface from 'types/chats';
import MessageInterface from 'types/messages';
import UserInterface from 'types/users';
import ChatList from 'components/ChatList';

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
