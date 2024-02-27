import request from '../request';
import { Conversation } from '@definitions/messages';

//TODO: последить за на ошибками вк, сделать норм интерфейс для error-ов
export const getConversations = async (): Promise<Conversation[] | Error> => {
  const conversations = await request('messages.getConversations', {});
  let result: Conversation[] | Error;

  try {
    // TODO: починить any после решения вопросов со структурой запросов
    result = conversations.response.items.map((item: any) => ({
      chatSettings: item.conversation?.chat_settings,
      peer: item.conversation?.peer,
    }));
  } catch(error) {
    result = error
  }

  return result;
}
