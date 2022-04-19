import moment from "moment";
import Link from "next/link";
import Logo from "./Logo";

export default ({ chats, chatsLatestMessages, users }) => <ul>
    {chats.map((chat, key) => {
        const chatMessage = chatsLatestMessages.find(chatMessage => chatMessage.chatId === chat.id);
        const currentUser = users.find(user => user.id === chat.withUser);
        let date = moment(chatMessage.latestMessage.datehatMessage);
        return (
            <>
                <Link href={"/chats/" + chat.id}>
                    <div key={key} className="flex items-center p-2 hover:bg-gray-100 hover:cursor-pointer">
                        <div className="flex-none text-center">
                            <img className="rounded-full w-12" src={currentUser.profilePicture} />
                            {
                                chat.isActive ?
                                    <p className="text-xs text-green-500">online</p> : null
                            }
                        </div>
                        <div className="flex-auto p-2">
                            <p className="text-lg ">{currentUser.name}</p>
                            <p className="text-sm text-gray-400">{chatMessage.latestMessage.content}</p>
                        </div>
                        <div className="flex-none">
                            <p className="text-sm text-gray-300">{date.fromNow()}</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    })}
</ul>