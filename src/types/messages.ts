// Message Interface
export default interface MessageInterface {
  id: string;
  // User Id related to this chat
  chatId: string;
  // Boolean that say if the message was from me or the other user
  writtenByMe: boolean;
  // content of the message
  content: string;
  // Date of the message
  date: string;
}