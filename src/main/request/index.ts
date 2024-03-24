import { getChat as chat } from './messages/getChat';
import { getConversations as conversations } from './messages/getConversations';
import { Conversation } from '@definitions/messages';

export const getConversations = (): Promise<Conversation[] | unknown> => {
  return conversations();
}
export const grabChat = async (chatId: string) => {
  return await chat(chatId);
}
