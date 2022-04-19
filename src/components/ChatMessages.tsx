import classNames from "classnames";

export default ({ users, currentChat, currentChatMessages }) => (
    <>
        <div className="p-4">
            <img src="" />
            <p>
                {users.find(user => user.id === currentChat.withUser).name}
            </p>
        </div>
        <hr />
        <ul className="p-4 h-96 overflow-scroll">
            {
                currentChatMessages.map((message, key) => {
                    return (
                        <div key={key} className={classNames({
                            'flex': true,
                        })}>
                            <p className={classNames({
                                'rounded-xl': true,
                                'm-2': true,
                                'p-2': true,
                                'bg-green-300': message.writtenByMe,
                                'bg-gray-300': !message.writtenByMe,
                                'ml-auto': message.writtenByMe,
                            })}>{message.content}</p>
                        </div>
                    )
                })
            }
        </ul>
        <div className="p-4">
            <form className="p-2">
                <input type="text" className="border-2 p-2 w-full" placeholder="Type your message" />
            </form>
        </div>
    </>
)