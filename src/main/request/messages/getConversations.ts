import request from '../request';
import { Conversation } from '@definitions/messages';

export const getConversations = async (): Promise<Conversation[] | Error> => {
  const conversations = await request('messages.getConversations', {});
  let result: Conversation[] | Error;

  try {
    result = conversations.response.items.map((item: any) => ({
      chatSettings: item.conversation?.chat_settings,
      peer: item.conversation?.peer,
    }));
  } catch(error) {
    result = error
  }

  return result;
}
