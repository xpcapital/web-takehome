// Chat Interface
export default interface ChatInterface {
  id: string;
  // User Id related to this chat
  withUser: string;
  // Fake data in order to display the green dot
  isActive: boolean;
  // array of messages id
  messages: string[];
  // last message that should be displayed in the chat preview
  lastMessage: string;
}