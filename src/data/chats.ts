import ChatInterface from "types/chats";
import MessageInterface from "types/messages";
import generateMessages from "./messages";

const getMessagesArray = (messages: MessageInterface[], index) => {
  return messages
    .filter(message => message.chatId === `chat_${index}`)
    .map(message => message.id);
};

const generateChats = () => {
  const messages = generateMessages();
  const chats: ChatInterface[] = [
    {
      id: 'chat_1',
      withUser: 'user_1',
      isActive: true,
      messages: getMessagesArray(messages, 1),
      lastMessage: 'message_101',
    },
    {
      id: 'chat_2',
      withUser: 'user_2',
      isActive: false,
      messages: getMessagesArray(messages, 2),
      lastMessage: 'message_201',
    },
    {
      id: 'chat_3',
      withUser: 'user_3',
      isActive: true,
      messages: getMessagesArray(messages, 3),
      lastMessage: 'message_301',
    },
    {
      id: 'chat_4',
      withUser: 'user_4',
      isActive: true,
      messages: getMessagesArray(messages, 4),
      lastMessage: 'message_401',
    },
    {
      id: 'chat_5',
      withUser: 'user_5',
      isActive: true,
      messages: getMessagesArray(messages, 5),
      lastMessage: 'message_501',
    },
    {
      id: 'chat_6',
      withUser: 'user_6',
      isActive: false,
      messages: getMessagesArray(messages, 6),
      lastMessage: 'message_601',
    },
    {
      id: 'chat_7',
      withUser: 'user_7',
      isActive: false,
      messages: getMessagesArray(messages, 7),
      lastMessage: 'message_701',
    }
  ];

  return { chats, messages };
}

export default generateChats;