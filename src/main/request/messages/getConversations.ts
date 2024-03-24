import request from '../request';
import { Conversation } from '@definitions/messages';

//TODO: сделать общий интерфейс для error-ов
export const getConversations = async (): Promise<Conversation[] | Error> => {
  const conversations = await request('messages.getConversations', {});
  let result: Conversation[] | Error;

  try {
    // TODO: сделать общую структуру для ответов с чатами
    result = conversations.response.items.map((item) => ({
      chatSettings: item.conversation?.chat_settings,
      peer: item.conversation?.peer,
    }));
  } catch(error) {
    result = error
  }

  return result;
}
