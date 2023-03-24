import mockup from "data/mockup";

import ClubLogoSvg from "icons/club-logo.svg";
import UserInterface from "types/users";
import ChatInterface from "types/chats";
import MessageInterface from "types/messages";

interface LandingPageProps {
  users: UserInterface[];
  chats: ChatInterface[];
  messages: MessageInterface[];
}

const LandingPage = ({ users, chats, messages }: LandingPageProps) => {
  console.log({ users, chats, messages });

  return (
    <>
      <div className="bg-black h-screen w-full flex justify-center items-center flex-col">
        <ClubLogoSvg className="w-[100px]" />
        <p className="text-white text-[23px] mt-[8px]">takehome</p>
      </div>
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      ...mockup,
    },
  };
};

export default LandingPage;
