import generateUsers from 'data/users';
import generateChats from 'data/chats';

import ClubLogoSvg from 'icons/club-logo.svg';
import UserInterface from 'types/users';
import ChatInterface from 'types/chats';
import MessageInterface from 'types/messages';

interface LandingPageProps {
  users: UserInterface[];
  chats: ChatInterface[];
  messages: MessageInterface[];
};

const LandingPage = ({ users, chats, messages}: LandingPageProps) => {
  console.log({ users, chats, messages });

  return (
    <>
      <div className="bg-black h-screen w-full flex justify-center items-center flex-col">
        <ClubLogoSvg className="w-[100px]" />
        <p className="text-white text-[23px] mt-[8px]">
          takehome
        </p>
      </div>
    </>
  );
};

export const getServerSideProps = () => {
  // This is only an exemple of how you could pass data from server to client,
  // you may create another page and not use that use
  const users: UserInterface[] = generateUsers();
  const { chats, messages }: { chats: ChatInterface[], messages: MessageInterface[] } = generateChats();

  return {
    props: {
      users, chats, messages,
    },
  };
}

export default LandingPage;
