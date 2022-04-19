import chats from "data/chats";
import ChatList from "./ChatList";
import Logo from "./Logo";
import Overview from "./Overview";
import Search from "./Search";

export default ({ chats, chatsLatestMessages, messages, users }) => (
    <>
        <div className="my-4 mx-2">
            <Logo />
        </div>

        <div className="my-4 mx-2">
            <Overview totalChats={chats.length} />
        </div>

        <div className="my-4 mx-2">
            <Search />
        </div>

        <div className="my-4 mx-2">
            <ChatList chatsLatestMessages={chatsLatestMessages} chats={chats} users={users} />
        </div>
    </>
)